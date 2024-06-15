import { filterObjectXss, toType } from '@/utils/tools'
import { CoreQuery, CoreQueryRequest } from '@/types'
import { getItem } from '@/core/query'
/*
  更新数据方法
  1. 支持未知ID单条数据修改
    URL:    /xxx/first
    DATA:   {...}
    此方法会找数据库第一条数据，进行对应修改，用于特殊用途
  2. 支持单ID数据修改
    URL: /xxx/:id
    DATA:   {...}
    正常使用，数据为需要修改的数据字典
  3. 支持多ID单数据修改
    URL: /xxx/1,2,3,4,5,6
    DATA:   {...}
    支持将多条数据的内容进行统一处理，例如批量加入回收站或者批量转移归属栏目等
  4. 支持多ID多数据修改
    URL: /xxx/batch
    DATA:   [{...}, {...}, {...}, {...}]
    将需要多条修改的数据构成数组传进来。
    每个数据里面必须包含 'id' 字段，否则参数错误
*/

const put: CoreQuery = async ({ table, apiName, id, data }): Promise<CoreQueryRequest> => {
  try {
    if (!data || !id) {
      return { code: 412, message: '更新数据数据不能为空' }
    }
    // 构建返回数据结构
    const res: { succ: number[]; fail: number[]} = { succ: [], fail: [] }
    // 构建添加数据方法，因 update 方法不会返回数据，故而使用 findOne方法先查询，再 save 的做法
    const putItemFunc = async (id: string | number, item: Record<string, any>) => {
      const data = filterObjectXss(item)
      let firstId: number | null = null
      if (id === 'first') {
        const res = await getItem(apiName, 'first')
        firstId = res.id
      }
      try {
        const upDate: Record<string, any> = await table.update({
          where: {
            id: firstId || Number(id)
          },
          data
        })
        res.succ.push(Number(upDate.id))
      } catch (error) {
        res.fail.push(Number(id))
      }
    }
    if (id === 'batch' && data) {
    // 多ID多数据修改
      if (toType(data) !== 'array') return { code: 412, message: '批量更新数据，数据参数必须为数组对象' }
      if (data.filter((r: any) => !r.id).length) return { code: 412, message: '批量更新数据，每条数据必须包含ID字段' }
      await Promise.all(data.map(async (item: any) => {
        await putItemFunc(item.id, item)
      }))
    } else {
    // 数据校验
      if (toType(data) !== 'object') return { code: 412, message: '更新数据，数据参数必须为对象' }
      if (!Array.isArray(data) && data.id) delete data.id
      if (!Object.keys(data).length) return { code: 412, message: '更新数据，数据对象不能为空' }

      if (id === 'first') {
      // 未知ID单条数据修改
        await putItemFunc(id, data)
      } else {
      // 多ID单数据修改 以及 单ID数据修改
        const ids = id.split(',')
        await Promise.all(ids.map(async itemId => {
          await putItemFunc(itemId, data)
        }))
      }
    }

    return { code: 200, data: res }
  } catch (error) {
    return { code: 400, message: `Error ${apiName} id or other params` }
  }
}

export default put
