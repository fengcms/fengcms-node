import { CoreQuery, CoreQueryRequest } from '@/types'

const post: CoreQuery = async ({ prisma, table, params }): Promise<CoreQueryRequest> => {
  try {
    const data = await table.create({
      data: params
    })
    return { data, code: 200 }
  } catch (error) {
    return { code: 400, message: 'Error Data' }
  } finally {
    prisma.$disconnect()
  }
}

export default post
