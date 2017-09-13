const request = require('supertest')
const i18next = require('i18next')
const purchaseResponse = require('./data/purchaseResponse').default
const Server = require('../src/server').default
const messages = require('../src/messages').default

// resolver code uses context.fetch. We are mocking it here to prevent the test
// suite from actually hitting the API.
const fauxFetch = jest.fn(() => {
  return Promise.resolve({
    text: jest.fn(() => Promise.resolve(purchaseResponse)),
  })
})

let app

i18next.init(messages)
const fr = i18next.getFixedT('fr')
const en = i18next.getFixedT('en')

describe('GraphQL API', () => {
  beforeAll(async () => {
    app = Server({
      fetch: fauxFetch,
      apiToken: 'yesguy',
      apiHost: 'esqa.moneris.com',
      storeID: 'store3',
    })
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

  describe('I18n', () => {
    it('shows purchase description in the language specified by the Accept-Language header', async () => {
      let lang = 'fr-CA'
      let response = await request(app)
        .post('/graphql')
        .set('Accept-Language', lang)
        .set('Content-Type', 'application/graphql; charset=utf-8').send(`
        query {
          __schema {
              mutationType {
                fields {
                  name
                  description
                }
              }
            }
          }
        `)
      let { mutationType } = response.body.data.__schema
      let [first, ..._] = mutationType.fields
      expect(first.description).toEqual(
        fr('mutation.fields.purchase.description'),
      )
    })

    it('it translates the arg descriptions', async () => {
      let lang = 'fr-CA'
      let response = await request(app)
        .post('/graphql')
        .set('Accept-Language', lang)
        .set('Content-Type', 'application/graphql; charset=utf-8').send(`
        query {
          __schema {
              mutationType {
                fields {
                  name
                  args {
                    name
                    description
                  }
                }
              }
            }
          }
        `)
      let { mutationType } = response.body.data.__schema
      var [purchase, ..._] = mutationType.fields
      var [expiry, ..._] = purchase.args // expiry is the first argument
      expect(expiry.description).toEqual(
        fr('mutation.fields.purchase.args.expiry'),
      )
    })

    it('defaults to the en locale if no Accept-Language header is sent', async () => {
      let response = await request(app)
        .post('/graphql')
        .set('Content-Type', 'application/graphql; charset=utf-8').send(`
        query {
          __schema {
              mutationType {
                fields {
                  name
                  description
                }
              }
            }
          }
        `)
      let [purchase, ..._] = response.body.data.__schema.mutationType.fields
      expect(purchase.description).toEqual(
        en('mutation.fields.purchase.description'),
      )
    })
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
