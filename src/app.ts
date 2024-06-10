import express from "express";

const app = express()

app.get('/', (req, res) => {
  console.log(req)
  res.send('hi')
})

app.listen(4888, '0.0.0.0', () => {
  console.log('app is runing on http://localhost:4888')
})