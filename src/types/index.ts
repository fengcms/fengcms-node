import type { Request } from 'express'

export type MethodType = 'get' | 'post' | 'put' | 'delete' | 'ls'

export interface ReqApiData {
  apiName: string
  id: string | number
  method: MethodType
}

export interface ReqApiDataRequest extends Request {
  reqApiData?: ReqApiData
}
