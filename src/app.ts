import express from 'express'
import bodyParser from 'body-parser'
import { PrismaClient } from '@prisma/client'
import { apiCheck } from '@/middleware/check'
import { ApiDataRequest } from '@/types'

const app = express()
const prisma = new PrismaClient()

app.use(bodyParser.json())
app.use(apiCheck)

app.all('*', async (req: ApiDataRequest, res) => {
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
    // @ts-ignore
    const table = prisma[apiName]
    if (!table) {
    // const table = prisma.article
      res.status(400).json({ message: 'Error Api Name' })
      return
    }
    const a = await table.findMany()
    console.log(a)
    res.json({ data: 'hi' })
  }
})

export default app
