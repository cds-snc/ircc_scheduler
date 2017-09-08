const request = require('supertest')
const graphqlHTTP = require('express-graphql')
const schema = require('../src/schema').default
const express = require('express')

const server = express()

let app

describe('GraphQL API', () => {
  beforeAll(async () => {
    app = server.use(
      '/graphql',
      graphqlHTTP({
        schema,
        context: {
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
    })
  })
})
