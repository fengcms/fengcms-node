import type { Request } from 'express'

export type MethodType = 'get' | 'post' | 'put' | 'delete' | 'ls'

export interface ReqApiData {
  apiName: string
  id: string | number
  method: MethodType
  isExtraApi: boolean
}

export interface ApiDataRequest extends Request {
  apiData?: ReqApiData
}
