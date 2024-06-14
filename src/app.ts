import express from 'express'
import bodyParser from 'body-parser'
import { PrismaClient } from '@prisma/client'
import { apiCheck } from '@/middleware/check'
import { ApiDataRequest } from '@/types'
import core from '@/core'
import { initModel } from '@/core/initModel'

const app = express()
const prisma = new PrismaClient()
const models = initModel()

global.prisma = prisma
global.models = models

app.use(bodyParser.json())
app.use(apiCheck)

app.all('*', async (req: ApiDataRequest, res) => {
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
    // console.log(prisma.article)

    // @ts-ignore
    const table = prisma[apiName] as any
    if (!table) {
      res.status(400).json({ message: 'Error Api Name' })
      return
    }
    await core(table, req, res)
    // console.log(a)
    // res.json({ data: 'hi' })
  }
})

export default app
