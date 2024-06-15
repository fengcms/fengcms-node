import type { Request } from 'express'

export type MethodType = 'get' | 'post' | 'put' | 'del' | 'ls'

export interface ReqApiData {
  apiName: string
  id: string
  method: MethodType
  isExtraApi: boolean
}

export interface ApiDataRequest extends Request {
  apiData?: ReqApiData
}

export interface CoreQueryParams {
  table: any
  apiName: string
  params?: Record<string, any>
  id?: string
  data?: Record<string, any> | Record<string, any>[]
}
export interface CoreQueryRequest {
  code: number
  message?: string
  data?: any
}

export type CoreQuery = (props: CoreQueryParams)=> Promise<CoreQueryRequest>

export type OrderType = Record<string, 'asc' | 'desc'>
export interface LsCondition {
  where: Record<string, string | number | Record<string, any>>
  take?: number
  skip?: number
  orderBy?: OrderType
}
