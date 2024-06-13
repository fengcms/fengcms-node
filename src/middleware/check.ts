import type { Response, NextFunction } from 'express'
import { APP_BASE } from '@/config'
import { parserApiNameAndID, getTsFile } from '@/utils/tools'
import { ApiDataRequest, MethodType } from '@/types'

const extraAPI = getTsFile('../api/extra')
// console.log(extraAPI)

const calcMethod = (id: any, method: string) => {
  if (!id && method === 'GET') return 'ls'
  if (method === 'DELETE') return 'del'
  return method.toLocaleLowerCase()
}

export const apiCheck = (req: ApiDataRequest, res: Response, next: NextFunction) => {
  const { prefix } = APP_BASE
  const { originalUrl, method } = req
  // console.log(prefix, req.method, req.url, req.originalUrl, req.path, req.query, req.body)
  // 处理接口前缀错误
  if (originalUrl.substring(0, prefix.length) !== prefix) {
    res.status(400).json({ message: 'Error Api prefix' })
    return
  }
  const { apiName, id, errorUrl } = parserApiNameAndID(req.originalUrl)

  if (errorUrl) {
    res.status(400).json({ message: 'Error URL' })
    return
  }

  if (!apiName) {
    res.status(400).json({ message: 'Error Api Name' })
    return
  }

  if ((!id && ['PUT', 'DELETE'].includes(method)) || (id && ['POST'].includes(method))) {
    res.status(400).json({ message: 'Error Method' })
    return
  }

  req.apiData = {
    apiName,
    id,
    method: calcMethod(id, method) as MethodType,
    isExtraApi: extraAPI.includes(apiName)
  }
  // console.log(apiName === '', id)

  next()
}
