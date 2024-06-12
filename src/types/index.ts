import type { Request } from 'express'

export type MethodType = 'get' | 'post' | 'put' | 'del' | 'ls'

export interface ReqApiData {
  apiName: string
  id: string | number
  method: MethodType
  isExtraApi: boolean
}

export interface ApiDataRequest extends Request {
  apiData?: ReqApiData
}

export interface CoreQueryParams {
  table: any;
  apiName: string;
  params?: Record<string, any>
  id?: string | number | undefined
}

export type CoreQuery = (props: CoreQueryParams)=> Promise<any>
