const fetch = require('isomorphic-fetch')
const Server = require('./src/server').default

const server = Server({
  fetch,
  apiToken: process.env.API_TOKEN,
  apiHost: process.env.API_HOST,
  storeID: process.env.STORE_ID,
})

server.listen(3000)
