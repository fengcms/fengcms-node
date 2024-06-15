import { toType } from '@/utils/tools'
import { calcHashSha256 } from '@/utils/hash'
import prisma from '@/core/prisma'

import ls from './ls'
import get from './get'
import put from './put'
import post from './post'
import del from './del'

export const getList = async (apiName: string, params = {}) => {
  // @ts-ignore
  const table = prisma[apiName]
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
    // @ts-ignore
    const table = prisma[apiName]
    if (!table) return null
    const { data } = await get({ table, apiName, id: params })
    return data ?? null
  }
}

// 系统内部添加新数据方法
export const postItem = async (apiName: string, data = {}) => {
  // @ts-ignore
  const table = prisma[apiName]
  if (!table) return false
  const res = await post({ table, apiName, data })
  return res.data ?? false
}

// 初始化空数据时添加默认数据方法
export const initDb = async () => {
  const hasManage = await getItem('manages', 'first')
  // console.log(hasManage)
  if (!hasManage) {
    const salt = String(Math.random())
    const password = calcHashSha256('123456' + salt)

    const initManageData = {
      account: 'admin',
      name: 'admin',
      salt,
      password,
      email: 'web@web.com',
      mark: '系统初始管理员账号'
    }
    postItem('manages', initManageData).then(() => {
      console.log('初始管理员账号添加完成 admin:123456')
    })
  }
  const hasSite = await getItem('site', 'first')
  if (!hasSite) {
    postItem('Site', {
      name: 'FengCMS API',
      title: 'FengCMS API By FungLeo',
      keywords: 'FengCMS,CMS,FungLeo',
      copyright: 'By FungLeo'
    }).then(() => {
      console.log('初始系统信息数据完成')
    })
  }
  const hasChan = await getItem('channel', 'first')
  // console.log(hasChan)
  if (!hasChan) {
    const calcchannelMockDat = (pid: number, pre = '顶级') => {
      return 'leo'.split('').map((i, index) => {
        return { pid, name: `${pre}栏目${pid}-${index}` }
      })
    }
    const { ids } = await postItem('channel', calcchannelMockDat(0))
    ids.forEach(async (i: any) => {
      const { ids } = await postItem('channel', calcchannelMockDat(i, '二级'))
      ids.forEach(async (i: any) => {
        await postItem('Channel', calcchannelMockDat(i, '三级'))
      })
    })
    console.log('初始测试栏目数据完成')
  }
}

initDb()

const query = {
  ls, get, put, post, del
}

export default query
