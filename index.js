const fetch = require('isomorphic-fetch')
const express = require('express')
const server = express()
const graphqlHTTP = require('express-graphql')
const createSchema = require('./src/schema').default
const i18next = require('i18next')
const messages = require('./src/messages').default
const { LanguageDetector } = require('i18next-express-middleware')

const detector = new LanguageDetector(
  i18next.services,
  {}, // detector options
  { fallbackLng: 'en' }, // allOptions
)

i18next.init(messages)

server.use(
  '/graphql',
  graphqlHTTP((request, response) => {
    let lang = detector.detect(request, response)
    return new Promise((resolve, reject) => {
      i18next.changeLanguage(lang, (err, t) => {
        if (err) {
          reject(new Error('Language detection failed.'))
        } else {
          resolve({
            schema: createSchema(t),
            context: {
              fetch,
              apiToken: process.env.API_TOKEN,
              apiHost: process.env.API_HOST,
              storeID: process.env.STORE_ID,
            },
            graphiql: true,
          })
        }
      })
    })
  }),
)

server.listen(3000)
