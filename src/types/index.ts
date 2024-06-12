import type { Request } from 'express'
import type { PrismaClient } from '@prisma/client'

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
  prisma: PrismaClient
  table: any
  apiName: string
  params?: Record<string, any>
  id?: string
}
export interface CoreQueryRequest {
  code: number
  message?: string
  data?: any
}

export type CoreQuery = (props: CoreQueryParams)=> Promise<CoreQueryRequest>

// export type
