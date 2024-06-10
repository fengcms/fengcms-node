import express from 'express'

const app = express()

app.get('/', (req, res) => {
  console.log(req)
  res.send('hi')
})

export default app
