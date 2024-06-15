import { CoreQuery, CoreQueryRequest } from '@/types'

const get: CoreQuery = async ({ table, apiName, id }): Promise<CoreQueryRequest> => {
  // const condition = id === 'first' ? { where: {} } : { where: { id: Number(id) } }
  const data = id === 'first' ? await table.findFirst() : await table.findUnique({ where: { id: Number(id) } })
  if (!data) {
    return { code: 404, message: `Error ${apiName} id` }
  }
  if (data.time) {
    data.time = new Date(data.time).getTime()
  }

  return { code: 200, data }
}

export default get
