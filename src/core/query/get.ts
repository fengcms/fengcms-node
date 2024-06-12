import { CoreQuery, CoreQueryRequest } from '@/types'

const get: CoreQuery = async ({ prisma, table, apiName, id }): Promise<CoreQueryRequest> => {
  const data = await table.findUnique({
    where: {
      id: Number(id)
    }
  })
  if (!data) {
    return { code: 404, message: `Error ${apiName} id` }
  }
  if (data.time) {
    data.time = new Date(data.time).getTime()
  }

  prisma.$disconnect()
  return { code: 200, data }
}

export default get
