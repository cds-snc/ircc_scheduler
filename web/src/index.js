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
  }

  state = {
    lang: 'en',
    catalogs: { en: unpackCatalog(en), fr: unpackCatalog(fr) },
  }

  changeLanguage() {
    if (this.state.lang === 'en') {
      this.setState({ lang: 'fr' })
    } else {
      this.setState({ lang: 'en' })
    }
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
              <Button primary onClick={() => window.alert('pretend a payment happened')}>{<Trans>Pay my fees online</Trans>}</Button>
            </div>
          </Panel>
        </CentredSection>
        <Footer />
      </I18nProvider>
    )
  }
}

render(<App />, document.querySelector('#app'))
