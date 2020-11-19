const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/soap', (req, res) => {
    res.send('soad dziala')
  })
  app.post('/rest', (req, res) => {
    res.send('rest dziala')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})