import React from 'react'
import { injectGlobal } from 'emotion'
import Switcher from './Switcher'
import Banner from './Banner'

injectGlobal`
  body {
    margin: 0;
    background: #fff;
  }
`

const App = () => (
  <div>
    <Banner lang="en" changeLanguage={() => 'en'} />
    <Switcher />
  </div>
)

export default App
