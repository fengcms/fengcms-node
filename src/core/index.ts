import { Response } from 'express'
import type { PrismaClient } from '@prisma/client'
import query from './query'
import { ApiDataRequest } from '@/types'
import { initModel } from '@/core/initModel'
import { objKeyLower } from '@/utils/tools'

let models: Record<string, string[]> | null = null

const core = async (prisma: PrismaClient, table: any, req: ApiDataRequest, res: Response) => {
  if (!models) models = initModel()
  if (!req.apiData) {
    res.status(400).json({ message: 'Error Api Data' })
    return
  }
  const { apiName, method, id } = req.apiData
  // console.log(apiName, method, id)
  const params = method === 'ls' ? objKeyLower(req.query) : req.body

  const fields = models[apiName]
  const { message, code, data } = await query[method]({ prisma, table, apiName, params, id, fields })
  if (code === 200) {
    res.json({ data })
  } else {
    console.log(code, message)
    res.status(code).json({ message, data })
  }
}

export default core
