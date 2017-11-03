import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Form from './Form'

import styles from '../css/Home'

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }
  constructor() {
    super()
    this.handleFormData = this.handleFormData.bind(this)
  }

  handleFormData(data) {
    console.log(styles) // eslint-disable-line no-console
    console.log(data) // eslint-disable-line no-console
    this.props.dispatch({ type: 'THANK_YOU' })
  }

  render() {
    return (
      <div className={styles.home}>
        <h1 className={styles.title}>HOME</h1>

        <div className={styles.content}>
          <p>Content</p>
          <Form onSubmit={this.handleFormData} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  path: state.location.pathname,
})

export default connect(mapStateToProps)(Home)
