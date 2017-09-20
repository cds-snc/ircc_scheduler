const path = require('path')
const express = require('express')
const app = express()

app.use('/public', express.static(path.join(__dirname, '/dist')))

app.listen(3000, () => {
  console.log('server on port 3000')
})
