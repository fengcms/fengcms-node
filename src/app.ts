import express from 'express'
import bodyParser from 'body-parser'
import { apiCheck } from '@/middleware/check'
import { ApiDataRequest } from '@/types'
const app = express()

app.use(bodyParser.json())
app.use(apiCheck)

app.all('*', (req: ApiDataRequest, res) => {
  console.log(req.method, req.url, req.originalUrl, req.path, req.query, req.body, req.apiData)
  const { apiData } = req
  if (!apiData) {
    res.status(400).json({ message: 'Error Api Data' })
    return
  }
  const { apiName, isExtraApi } = apiData

  if (isExtraApi) {
    const extraApiFunc = require(`@/api/extra/${apiName}`)
    extraApiFunc.default(req, res)
  } else {
    res.json({ data: 'hi' })
  }
})

export default app
