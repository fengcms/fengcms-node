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
  const params = method === 'ls' ? objKeyLower(req.query) : undefined

  const { message, code, data } = await query[method]({ table, apiName, params, id, data: req.body })
  if (code === 200) {
    res.send({ data })
  } else {
    console.log(code, message)
    res.status(code).json({ message, data })
  }
}

export default core
