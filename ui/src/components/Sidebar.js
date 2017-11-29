import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'redux-first-router-link'
import { Trans } from 'lingui-react'
import styles from '../css/Sidebar'
import Language from './Language'

const Sidebar = () => (
  <div className={styles.sidebar}>
    <h2>Links</h2>

    <NavLink to="/" exact activeClassName={styles.active}>
      <Trans>Home</Trans>
    </NavLink>

    <NavLink activeClassName={styles.active} to={{ type: 'THANK_YOU' }}>
      <Trans>Thank you</Trans>
    </NavLink>

    <Language />
  </div>
)

const mapStateToProps = state => ({
  path: state.location.pathname,
})

export default connect(mapStateToProps)(Sidebar)
