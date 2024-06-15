import { CoreQuery, CoreQueryRequest } from '@/types'

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
    const res = await table.update({
      where: {
        id: Number(id)
      },
      data
    })
    return { code: 200, data: res }
  } catch (error) {
    return { code: 400, message: `Error ${apiName} id or other params` }
  }
}

export default put
