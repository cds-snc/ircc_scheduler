import React from 'react'
import { css, injectGlobal } from 'emotion'
import Sidebar from './Sidebar'
import Switcher from './Switcher'

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

const App = () => (
  <div className={app}>
    <Sidebar />
    <Switcher />
  </div>
)

export default App
