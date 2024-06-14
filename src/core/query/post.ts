import { CoreQuery, CoreQueryRequest } from '@/types'

const post: CoreQuery = async ({ table, params }): Promise<CoreQueryRequest> => {
  try {
    if (!params) return { code: 400, message: 'Error Data' }
    const data = await table.create({
      data: params
    })
    return { data, code: 200 }
  } catch (error) {
    return { code: 400, message: 'Error Data' }
  }
}

export default post
