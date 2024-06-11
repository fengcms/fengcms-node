import express from 'express'
import bodyParser from 'body-parser'
import { apiCheck } from '@/middleware/check'
const app = express()

app.use(bodyParser.json())
app.use(apiCheck)

app.all('*', (req, res) => {
  console.log(req.method, req.url, req.originalUrl, req.path, req.query, req.body)
  res.send('hi')
})

export default app
