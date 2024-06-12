import { CoreQuery } from '@/types'

const ls: CoreQuery = async ({ table, apiName, id, params }) => {
  return await table.findMany()
  console.log(apiName, id, params)
}

export default ls
