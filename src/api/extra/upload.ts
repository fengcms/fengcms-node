import type { Response } from 'express'
import { ApiDataRequest } from '@/types'

const upload = (req: ApiDataRequest, res: Response) => {
  res.json({ data: 'upload' })
}

export default upload
