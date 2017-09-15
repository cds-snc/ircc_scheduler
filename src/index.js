import React, { Component } from 'react'
import { render } from 'react-dom'
import Panel from './components/Panel'
import { I18nProvider, Trans } from 'lingui-react'
import { unpackCatalog } from 'lingui-i18n'
import en from '../locale/en/messages.js'
import fr from '../locale/fr/messages.js'
import styled from 'styled-components'

const dev =
  process.env.NODE_ENV !== 'production' ? require('lingui-i18n/dev') : undefined

const LanguageSwitcher = styled.a`
  text-decoration: underline;
  color: #284162;
  background-color: none;
  &:visited {
      color: #7834bc;
  }
  &:hover {
    cursor: pointer;
  }
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
        <main>
          <LanguageSwitcher onClick={this.changeLanguage}>{ this.state.lang === 'en' ? 'Français': 'English'}</LanguageSwitcher>
          <Panel title={<Trans>Pay your fees</Trans>} />
        </main>
      </I18nProvider>
    )
  }
}

render(<App />, document.querySelector('#root'))
