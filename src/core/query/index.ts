import { toType } from '@/utils/tools'

import ls from './ls'
import get from './get'
import put from './put'
import post from './post'
import del from './del'

export const getList = async (apiName: string, params = {}) => {
  const table = global.prisma[apiName]
  if (!table) return []
  const { data } = await ls({ table, params, apiName })
  return data ? data.list : []
}

// 系统内部查询单条数据方法
export const getItem = async (apiName: string, params: any) => {
  if (toType(params) === 'object') {
    const { data } = await getList(apiName, params)
    if (data.list.length) {
      return data.list[0]
    } else {
      return null
    }
  } else {
    const table = global.prisma[apiName]
    if (!table) return null
    const { data } = await get({ table, apiName, id: params })
    return data ?? null
  }
}

// 系统内部添加新数据方法
export const postItem = async (apiName: string, params = {}) => {
  const table = global.prisma[apiName]
  if (!table) return false
  const { data } = await post({ table, apiName, params })
  return data ?? false
}

// 初始化空数据时添加默认数据方法
export const initDb = async () => {
  const hasManage = await getItem('manages', 'first')
  // const password = await rsa.encrypt('123456')
  if (!hasManage) {
    postItem('manages', {
      account: 'admin',
      name: 'admin',
      // password,
      email: 'web@web.com',
      mark: '系统初始管理员账号'
    }).then(() => {
      console.log('初始管理员账号添加完成 admin:123456')
    })
  }
  const hasSite = await getItem('Site', 'first')
  if (!hasSite) {
    postItem('Site', {
      name: 'RESTFul CMS koa By FungLeo',
      title: 'RESTFul CMS koa By FungLeo',
      keywords: 'RESTFul,CMS,koa',
      copyright: 'By FungLeo'
    }).then(() => {
      console.log('初始系统信息数据完成')
    })
  }
  const hasChan = await getItem('Channel', 'first')
  if (!hasChan) {
    const calcchannelMockDat = (pid: number, pre = '顶级') => {
      return 'leo'.split('').map((i, index) => {
        return { pid, name: `${pre}栏目${pid}${index}` }
      })
    }
    const { ids } = await postItem('Channel', calcchannelMockDat(0))
    ids.forEach(async (i: any) => {
      const { ids } = await postItem('Channel', calcchannelMockDat(i, '二级'))
      ids.forEach(async (i: any) => {
        await postItem('Channel', calcchannelMockDat(i, '三级'))
      })
    })
    console.log('初始测试栏目数据完成')
  }
}

const query = {
  ls, get, put, post, del
}

export default query
