import React, { Component } from 'react'
import gql from 'graphql-tag'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import Cache from 'apollo-cache-inmemory'
import { Trans } from 'lingui-react'
import { Button } from '@cdssnc/gcui'

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql' }),
  cache: new Cache().restore(window.__APOLLO_STATE__),
})

class PaymentButton extends Component {
  constructor() {
    super()
    this.pay = ::this.pay
  }

  state = {
    payment: {},
  }

  pay() {
    let mutation = gql`
      mutation(
        $expiryYear: ExpiryYear!
        $expiryMonth: ExpiryMonth!
        $orderID: String!
        $primaryAccountNumber: PAN!
        $amount: Float!
        $description: String!
      ) {
        purchase(
          expiryYear: $expiryYear
          expiryMonth: $expiryMonth
          orderID: $orderID
          primaryAccountNumber: $primaryAccountNumber
          amount: $amount
          description: $description
        ) {
          receiptID
          referenceNumber
          bankTotals
          responseCode
          message
          complete
          amount
          timedOut
        }
      }
    `
    let variables = {
      expiryYear: '17',
      expiryMonth: '11',
      orderID: `ircc-${Math.random(5)}`,
      primaryAccountNumber: '4242424242424242',
      amount: 1.0,
      description: 'This is a test purchase',
    }
    client.mutate({ mutation, variables }).then(results => {
      this.setState({ payment: results.data.purchase })
    })
  }

  render() {
    return (
      <div>
        <Button primary onClick={this.pay}>
          {<Trans>Pay my fees online</Trans>}
        </Button>
        <div>
          {Object.keys(this.state.payment).map((keyName, keyIndex) => {
            return (
              <p key={keyName}>
                {keyName}:{this.state.payment[keyName]}
              </p>
            )
          })}
        </div>
      </div>
    )
  }
}

export default PaymentButton
