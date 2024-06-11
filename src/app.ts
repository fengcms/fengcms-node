import express from 'express'
import bodyParser from 'body-parser'
import { apiCheck } from '@/middleware/check'
import { ReqApiDataRequest } from '@/types'
const app = express()

app.use(bodyParser.json())
app.use(apiCheck)

app.all('*', (req: ReqApiDataRequest, res) => {
  console.log(req.method, req.url, req.originalUrl, req.path, req.query, req.body, req.reqApiData)
  res.json({ data: 'hi' })
})

export default app
