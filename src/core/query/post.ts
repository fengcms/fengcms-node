import { toType, filterObjectXss } from '@/utils/tools'
import { CoreQuery, CoreQueryRequest } from '@/types'

const post: CoreQuery = async ({ table, data }): Promise<CoreQueryRequest> => {
  try {
    if (!data) return { code: 400, message: 'Error Data' }

    if (toType(data) === 'object') data = [data]
    // 数据基本格式校验
    for (const r of data as Record<string, any>[]) {
      if (r.id) return { code: 412, message: '添加新数据，数据不得包含ID字段' }
      if (Object.keys(r).length === 0) return { code: 412, message: '添加新数据，数据不得为空' }
    }

    const res: {ids: number[]} = { ids: [] }
    await Promise.all(data.map(async (item: Record<string, any>) => {
      item = filterObjectXss(item)
      const { id } = await table.create({
        data: item
      }) as { id: number }
      res.ids.push(id)
    }))
    return { data: res, code: 200 }
  } catch (error) {
    return { code: 400, message: 'Error Data' }
  }
}

export default post
