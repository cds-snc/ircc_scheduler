const graphqlHTTP = require('express-graphql')
const fetch = require('isomorphic-fetch')
const schema = require('./src/schema').default
const express = require('express')

const server = express()

server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context: {
      fetch,
      apiToken: process.env.API_TOKEN,
      apiHost: process.env.API_HOST,
      storeID: process.env.STORE_ID,
    },
    graphiql: true,
  }),
)

server.listen(3000)
