import { DEFAULT_PAGESIZE } from '@/config'
import { CoreQuery, CoreQueryRequest } from '@/types'

const ls: CoreQuery = async ({ table, apiName, params }): Promise<CoreQueryRequest> => {
  const pageSize = params?.pagesize ? Number(params.pagesize) : DEFAULT_PAGESIZE
  const page = params?.page ? Number(params.page) : 0
  const skip = page * pageSize
  console.log(apiName, params)
  const data = await table.findMany({
    take: pageSize,
    skip
  })
  return {
    code: 200, data
  }
}

export default ls
