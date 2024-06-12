import { Response } from 'express'
import query from './query'
import { ApiDataRequest } from '@/types'
import { objKeyLower } from '@/utils/tools'

const core = async (table: any, req: ApiDataRequest, res: Response) => {
  if (!req.apiData) {
    res.status(400).json({ message: 'Error Api Data' })
    return
  }

  const { apiName, method, id } = req.apiData
  console.log(apiName, method, id)
  const params = method === 'ls' ? objKeyLower(req.query) : req.body
  const data = await query[method]({ table, apiName, params, id })
  res.json({ data })
}

export default core
