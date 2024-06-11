import type { Request, Response, NextFunction } from 'express'

export const apiCheck = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.url, req.originalUrl, req.path, req.query, req.body)
  next()
}
