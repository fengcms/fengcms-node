import { CoreQuery, CoreQueryRequest } from '@/types'

const del: CoreQuery = async ({ prisma, table, apiName, id }): Promise<CoreQueryRequest> => {
  const errRes = {
    code: 400,
    message: `Error ${apiName} id`
  }
  if (!id) return errRes
  const ids = id.split(',').map(val => Number(val))
  try {
    await table.deleteMany({
      where: {
        id: {
          in: ids
        }
      }
    })
    return { code: 200, data: true }
  } catch (error) {
    return errRes
  } finally {
    await prisma.$disconnect()
  }
}

export default del
