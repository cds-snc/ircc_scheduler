import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'redux-first-router-link'

import styles from '../css/Sidebar'

const Sidebar = () => (
  <div className={styles.sidebar}>
    <h2>Links</h2>

    <NavLink to="/" exact activeClassName={styles.active}>
      Home
    </NavLink>

    <NavLink activeClassName={styles.active} to={{ type: 'THANK_YOU' }}>
      Thank you
    </NavLink>
  </div>
)

const mapStateToProps = state => ({
  path: state.location.pathname,
})

export default connect(mapStateToProps)(Sidebar)
