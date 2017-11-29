import React from 'react'
import { css, injectGlobal } from 'emotion'
import Sidebar from './Sidebar'
import Switcher from './Switcher'
import { I18nProvider } from 'lingui-react'
import { unpackCatalog } from 'lingui-i18n'
import en from './locale/en/messages.js'
import fr from './locale/fr/messages.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const catalogs = { en: unpackCatalog(en), fr: unpackCatalog(fr) }

// required in development only (huge dependency)
const dev =
  process.env.NODE_ENV !== 'production' ? require('lingui-i18n/dev') : undefined

injectGlobal`
body {
  margin: 0;
  background: #fff;
}
`
const app = css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 10px;
`

const App = props => {
  const { lang } = props

  return (
    <I18nProvider language={lang} catalogs={catalogs} development={dev}>
      <div className={app}>
        <Sidebar />
        <Switcher />
      </div>
    </I18nProvider>
  )
}

App.propTypes = {
  lang: PropTypes.string,
}

const mapStateToProps = state => ({
  lang: state.language,
})

export default connect(mapStateToProps)(App)
