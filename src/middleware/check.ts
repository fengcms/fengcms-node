import type { Response, NextFunction } from 'express'
import { APP_BASE } from '@/config'
import { parserApiNameAndID } from '@/utils/tools'
import { ReqApiDataRequest, MethodType } from '@/types'
export const apiCheck = (req: ReqApiDataRequest, res: Response, next: NextFunction) => {
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

  req.reqApiData = {
    apiName, id, method: !id && method === 'GET' ? 'ls' : method.toLocaleLowerCase() as MethodType
  }
  console.log(apiName === '', id)

  next()
}
