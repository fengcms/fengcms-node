import { isInteger } from 'lodash'
import { DEFAULT_PAGESIZE } from '@/config'
import { CoreQuery, CoreQueryRequest, LsCondition, OrderType } from '@/types'
import { calcNumberString } from '@/utils/tools'

// 从请求参数中找出非标准参数并输出为对象
const getArgs = (params: Record<string, string>) => {
  const args: Record<string, string> = {}
  for (const i in params) {
    if (!['pagesize', 'page', 'time', 'sort'].includes(i)) args[i] = params[i]
  }
  return args
}

// 非标配置项处理字典
const argHandle: Record<string, (v: string)=> any> = {
  like (arg: string) { // 模糊查询
    return { contains: arg }
  },
  neq (arg: string) { // 不等查询
    return { not: calcNumberString(arg) }
  },
  gt (arg: string) { // 大于查询
    return { gt: calcNumberString(arg) }
  },
  gteq (arg: string) { // 大于等于查询
    return { gte: calcNumberString(arg) }
  },
  lt (arg: string) { // 小于查询
    return { lt: calcNumberString(arg) }
  },
  lteq (arg: string) { // 小于等于查询
    return { lte: calcNumberString(arg) }
  },
  in (arg: string) { // in 查询 （和 无 argConf 查询多条记录是一样的）
    return { in: arg.split(',').map(i => calcNumberString(i)) }
  },
  nin (arg: string) { // notIn 查询
    return { notIn: arg.split(',').map(i => calcNumberString(i)) }
  },
  nil () {
    return null
  },
  nnil () {
    return { equals: '' }
  }
}

const ls: CoreQuery = async ({ table, params = {}, apiName }): Promise<CoreQueryRequest> => {
  const fields = global.models[apiName]
  const pageSize = params?.pagesize ? Number(params.pagesize) : DEFAULT_PAGESIZE
  const page = params?.page ? Number(params.page) : 0
  // 校验分页参数是否正确
  if (!isInteger(pageSize) || pageSize < 0 || !isInteger(page) || page < 0) {
    return { code: 400, message: 'Error parameters, pagesize and page can only be Positive Integer' }
  }
  const condition: LsCondition = {
    where: {},
    take: pageSize,
    skip: page * pageSize,
    orderBy: { id: 'desc' }
  }

  // pagesize 为 -1 时 查询全部数据
  if (pageSize === -1) {
    delete condition.take
    delete condition.skip
  }

  // 处理排序
  if (params.sort) {
    const sortArr = params.sort.split(',')
    const orderBy: OrderType = {}
    for (const i of sortArr) {
      let sortField = i
      if (i.substring(0, 1) === '-') {
        sortField = i.substring(1)
        orderBy[sortField] = 'asc'
      } else {
        orderBy[sortField] = 'desc'
      }
      if (!fields.includes(sortField)) {
        return { code: 400, message: 'Error sort parameters' }
      }
    }
    condition.orderBy = orderBy
  }

  // 处理时间参数
  if (params.time) {
    const timeArr = params.time.split('-')
    const timeArrLen = timeArr.length
    let st, et
    if (timeArrLen > 2) return { code: 412, message: 'time参数有误' }
    if (timeArr.filter((i: string) => !isInteger(Number(i))).length) return { code: 412, message: 'time参数只接受时间戳数字' }
    if (timeArrLen === 1) {
      const t = +timeArr[0]
      st = t - t % 86400000
      et = st + 86400000
    } else {
      st = +timeArr[0]
      et = +timeArr[1]
    }
    condition.where.time = {
      gte: new Date(st),
      lte: new Date(et)
    }
  }
  // 处理非标参数
  const args = getArgs(params)

  for (const i in args) {
    const [fieldName, argConf, arrErr] = i.split('-')
    if (arrErr) return { code: 412, message: i + '请求参数配置非法' }
    if (!fields.includes(fieldName)) return { code: 412, message: '请求参数包含非法字段 ' + fieldName }
    if (!argConf) {
      /*
        处理非配置查询参数
        支持 a=1 单个相等条件查询
        支持 a=1,2,3,4,5 多个相等条件查询
          会被解析为 in 查询
      */
      const argArr = (String(args[i]) || '').split(',').map((i) => calcNumberString(i))
      condition.where[fieldName] = argArr.length === 1 ? calcNumberString(args[i]) : { in: argArr }
    } else {
      // 处理配置查询参数
      if (argHandle[argConf]) {
        const handleReq = argHandle[argConf](args[i])
        const condField = condition.where[fieldName] as any
        /*
          查看该字段是否已有非标配置参数
            若有，则追加 and 条件
            如 a-gt=10&a-lt=1&a-neq=5 这样的多重复核查询条件的支持
        */
        condition.where[fieldName] =
        condField
          ? { ...condField, ...handleReq }
          : handleReq
      } else {
        return { code: 412, message: i + '请求参数配置不被支持' }
      }
    }
  }

  // console.log(condition)

  // console.log(apiName, params)
  const list = await table.findMany(condition)
  const count = await table.count({ where: condition.where })
  return {
    code: 200,
    data: {
      page: Number(page),
      list,
      count,
      // count: r.count,
      pageSize
    }
  }
}

export default ls
