import { isInteger } from 'lodash'
import { DEFAULT_PAGESIZE } from '@/config'
import { CoreQuery, CoreQueryRequest, LsCondition, OrderType } from '@/types'

const ls: CoreQuery = async ({ table, params = {}, fields }): Promise<CoreQueryRequest> => {
  const pageSize = params?.pagesize ? Number(params.pagesize) : DEFAULT_PAGESIZE
  const page = params?.page ? Number(params.page) : 0
  // console.log(111, global.models)
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

  console.log(condition)

  // console.log(apiName, params)
  const data = await table.findMany(condition)
  return { code: 200, data }
}

export default ls
