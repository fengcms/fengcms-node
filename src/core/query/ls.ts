import { CoreQuery, CoreQueryRequest } from '@/types'

const ls: CoreQuery = async ({ table, apiName, id, params }): Promise<CoreQueryRequest> => {
  return await table.findMany()
  console.log(apiName, id, params)
}

export default ls
