import { Response } from 'express'
import type { PrismaClient } from '@prisma/client'
import query from './query'
import { ApiDataRequest } from '@/types'
import { objKeyLower } from '@/utils/tools'

const core = async (prisma: PrismaClient, table: any, req: ApiDataRequest, res: Response) => {
  if (!req.apiData) {
    res.status(400).json({ message: 'Error Api Data' })
    return
  }

  const { apiName, method, id } = req.apiData
  console.log(apiName, method, id)
  const params = method === 'ls' ? objKeyLower(req.query) : req.body
  const data = await query[method]({ prisma, table, apiName, params, id })
  if (data) {
    res.json({ data })
  } else {
    res.status(400).json({ message: 'Error' })
  }
}

export default core
