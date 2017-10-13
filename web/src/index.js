import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { render } from 'react-dom'
import { I18nProvider, Trans } from 'lingui-react'
import { i18n, unpackCatalog } from 'lingui-i18n'
import en from '../locale/en/messages.js'
import fr from '../locale/fr/messages.js'
import { css, injectGlobal } from 'emotion'
import styled from 'react-emotion'
import Banner from './components/Banner'
import Footer from './components/Footer'
import CentredSection from './components/CentredSection'
import Nav from './components/Nav'
import ReactRouterPropTypes from 'react-router-prop-types'
import MultiStep from './components/MultiStep'


const TopicNavContainer = styled.nav`
  margin-top: 20px;
  padding-bottom: 2em;
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
`

const TopicNavItem = props => <Li {...props} />

const Li = styled.li`
  padding: 10px 15px;
  margin: -1px 0px;
  ${props =>
    props.heading
      ? css`
          color: #fff;
          background-color: #335075;
        `
      : css`
          background-color: #fff;
          & a {
            color: #555;
          }
          &:hover foo {
            background-color: #243850;
            & a {
              color: #fff;
              text-decoration: none;
            }
          }
        `} border: 1px solid #ddd;
  list-style-type: none;
  & a {
    text-decoration: none;
  }
`

const List = styled.ul`
  margin: 0;
  padding: 0;
`

const Main = styled.section`
  display: block;
  width: 75%;
  margin: 0 auto;
`

const FlexContainer = styled.section`
  display: flex;
  display: -ms-flexbox
  width: 100%;
  justify-content: flex-start;
  -ms-flex-pack: center;
`

const Content = () => (
  <Router>
    <FlexContainer>
      <div>
        <TopicNavContainer typeof="SiteNavigationElement" role="navigation">
          <List>
            <TopicNavItem heading>
              <Trans>My immigration or citizenship application</Trans>
            </TopicNavItem>
          </List>
          <List role="menu">
            <TopicNavItem>
              <Link to="/">
                <Trans>Home</Trans>
              </Link>
            </TopicNavItem>
            <TopicNavItem>
              <Link to="/fee_list">
                <Trans>Fee list</Trans>
              </Link>
            </TopicNavItem>
            <TopicNavItem>
              <Link to="/payment">
                <Trans>Pay your fees</Trans>
              </Link>
            </TopicNavItem>
          </List>
        </TopicNavContainer>
      </div>

      <div style={{ width: '100%' }}>
        <Route exact path="/" component={Home} />
        <Route path="/fee_list" component={FeeList} />
        <Route path="/payment" component={MultiStep} />
      </div>
    </FlexContainer>
  </Router>
)

const Home = () => (
  <div>
    <h2>
      <Trans>Home</Trans>
    </h2>
  </div>
)

const FeeList = ({ match }) => (
  <div>
    <h2>
      <Trans>Fee List</Trans>
    </h2>
    <p>
      <Trans>
        You need to pay a fee for most of our applications. You can find
        information on fees in the application guides.
      </Trans>
    </p>
    <ul>
      <li>
        <Link to={`${match.url}/${i18n.t`temporary_residence`}`}>
          <Trans>Temporary Residence</Trans>
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/permanent_residence`}>
          <Trans>Permanent Residence</Trans>
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/family_sponsorship`}>
          <Trans>Family Sponsorship</Trans>
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => (
        <h3>
          <Trans>Please select a topic.</Trans>
        </h3>
      )}
    />
  </div>
)

FeeList.propTypes = {
  match: ReactRouterPropTypes.match,
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

Topic.propTypes = {
  match: ReactRouterPropTypes.match,
}


const dev =
  process.env.NODE_ENV !== 'production' ? require('lingui-i18n/dev') : undefined

injectGlobal`
  body {
    margin: 0;
    font-family: sans-serif;
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
        <CentredSection>
          <Banner lang={this.state.lang} changeLanguage={this.changeLanguage} />
        </CentredSection>
        <Nav />
        <Main>
          <Content />
        </Main>
        <Footer />
      </I18nProvider>
    )
  }
}

render(<App />, document.querySelector('#app'))
