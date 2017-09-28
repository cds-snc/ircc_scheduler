import React, { Component } from 'react'
import { render } from 'react-dom'
import Panel from './components/Panel'
import { I18nProvider, Trans } from 'lingui-react'
import { unpackCatalog } from 'lingui-i18n'
import en from '../locale/en/messages.js'
import fr from '../locale/fr/messages.js'
import styled, { injectGlobal } from 'styled-components'
import Banner from './components/Banner'
import Footer from './components/Footer'
import CentredSection from './components/CentredSection'
import { Button, DownwardChevron } from '@cdssnc/gcui'
import gql from 'graphql-tag'
import ApolloClient from 'apollo-client'
import Link from 'apollo-link-http'
import Cache from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new Link({ uri: '/graphql' }),
  cache: new Cache().restore(window.__APOLLO_STATE__),
})

const dev =
  process.env.NODE_ENV !== 'production' ? require('lingui-i18n/dev') : undefined

injectGlobal`
  body {
    margin: 0;
  }
`
const Nav = styled.nav`
  background-color: rgb(51, 80, 117);
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  height: 55px;
  line-height: 23px;
  text-size-adjust: 100%;
  width: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const Category = styled.li`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  padding: 1em;
  text-align: center;
  border-left: 1px solid #999;
  border-right: 1px solid #999;
`

class App extends Component {
  constructor() {
    super()
    this.changeLanguage = ::this.changeLanguage
    this.makePayment = ::this.makePayment
  }

  state = {
    lang: 'en',
    catalogs: { en: unpackCatalog(en), fr: unpackCatalog(fr) },
    payment: {},
  }

  changeLanguage() {
    if (this.state.lang === 'en') {
      this.setState({ lang: 'fr' })
    } else {
      this.setState({ lang: 'en' })
    }
  }

  makePayment() {
    let mutation = gql`
      mutation(
        $expiry: String!
        $orderID: String!
        $primaryAccountNumber: PAN!
        $amount: Float!
        $description: String!
      ) {
        purchase(
          expiry: $expiry
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
      expiry: '16/11',
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
      <I18nProvider
        language={this.state.lang}
        catalogs={this.state.catalogs}
        development={dev}>
        <CentredSection>
          <Banner lang={this.state.lang} changeLanguage={this.changeLanguage} />
        </CentredSection>
        <Nav>
          <CentredSection>
            <ul>
              <Category>
                <a>
                  <Trans>Jobs</Trans>
                </a>
                <DownwardChevron />
              </Category>
              <Category>
                <a>
                  <Trans>Immigration</Trans>
                </a>
                <DownwardChevron />
              </Category>
              <Category>
                <a>
                  <Trans>Travel</Trans>
                </a>
                <DownwardChevron />
              </Category>
              <Category>
                <a>
                  <Trans>Business</Trans>
                </a>
                <DownwardChevron />
              </Category>
              <Category>
                <a>
                  <Trans>Benefits</Trans>
                </a>
                <DownwardChevron />
              </Category>
              <Category>
                <a>
                  <Trans>Health</Trans>
                </a>
                <DownwardChevron />
              </Category>
              <Category>
                <a>
                  <Trans>Taxes</Trans>
                </a>
                <DownwardChevron />
              </Category>
              <Category>
                <a>
                  <Trans>More services</Trans>
                </a>
                <DownwardChevron />
              </Category>
            </ul>
          </CentredSection>
        </Nav>
        <CentredSection>
          <div>&nbsp;</div>
          <Panel title={<Trans>How to pay your fees</Trans>}>
            <div style={{ padding: '1em 1em' }}>
              <Button primary onClick={this.makePayment}>
                {<Trans>Pay my fees online</Trans>}
              </Button>
            </div>
            <div>
              {this.state.payment &&
                Object.keys(this.state.payment).map((keyName, keyIndex) => {
                  return (
                    <p key={keyName}>
                      {keyName}:{this.state.payment[keyName]}
                    </p>
                  )
                })}
            </div>
          </Panel>
        </CentredSection>
        <Footer />
      </I18nProvider>
    )
  }
}

render(<App />, document.querySelector('#app'))
