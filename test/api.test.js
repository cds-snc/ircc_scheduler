const request = require('supertest')
const graphqlHTTP = require('express-graphql')
const schema = require('../src/schema').default
const express = require('express')
const purchaseResponse = require('./data/purchaseResponse').default
const server = express()

// resolver code uses context.fetch. We are mocking it here to prevent the test
// suite from actually hitting the API.
const fauxFetch = jest.fn(() => {
  return Promise.resolve({
    text: jest.fn(() => Promise.resolve(purchaseResponse)),
  })
})

let app

describe('GraphQL API', () => {
  beforeAll(async () => {
    app = server.use(
      '/graphql',
      graphqlHTTP({
        schema,
        context: {
          fetch: fauxFetch,
          apiToken: 'yesguy',
          apiHost: 'esqa.moneris.com',
          storeID: 'store3',
        },
      }),
    )
  })

  it('is properly mounted at /graphql', async () => {
    let response = await request(app)
      .post('/graphql')
      .set('Content-Type', 'application/graphql; charset=utf-8').send(`
        query {
          __schema {
              types {
                      name
                    }
              }
        }
    `)
    expect(response.status).toEqual(200)
  })

  describe('Mutations', () => {
    describe('purchase', () => {
      it('processes a payment via Moneris', async () => {
        let response = await request(app)
          .post('/graphql')
          .set('Content-Type', 'application/graphql; charset=utf-8').send(`
            mutation {
              purchase(
                amount: 1.00
                orderID: "${'ircc' + Math.random()}"
                expiry: "16/11"
                description: "INVOICE001"
                primaryAccountNumber: "4242424242424242"
              ){
                message 
               }
            }
        `)
        let { purchase } = response.body.data
        expect(purchase.message).toMatch(/APPROVED*/)
      })

      it('rejects bad credit card numbers', async () => {
        let response = await request(app)
          .post('/graphql')
          .set('Content-Type', 'application/graphql; charset=utf-8').send(`
            mutation {
              purchase(
                amount: 1.00
                orderID: "${'ircc' + Math.random()}"
                expiry: "16/11"
                description: "INVOICE001"
                primaryAccountNumber: "1324567891011121"
              ){
                message 
               }
            }
        `)
        let { errors } = response.body
        expect(errors[0].message).toMatch(/invalid value/)
      })
    })
  })
})
