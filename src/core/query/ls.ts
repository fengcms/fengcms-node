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
    console.log(orderBy)
    condition.orderBy = orderBy
  }
  console.log(condition)

  // console.log(apiName, params)
  const data = await table.findMany(condition)
  return { code: 200, data }
}

export default ls
