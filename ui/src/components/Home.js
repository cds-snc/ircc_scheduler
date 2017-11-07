import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import Form from './Form'
import gql from 'graphql-tag'

import styles from '../css/Home'

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }
  constructor() {
    super()
    this.handleFormData = this.handleFormData.bind(this)
  }

  async handleFormData(data) {
    let { client } = this.props

    let response = await client.mutate({
      mutation: gql`
        mutation($uci: String!, $reason: String!) {
          decline(uci: $uci, reason: $reason) {
            messageID
            statusCode
          }
        }
      `,
      variables: data,
    })

    let { data: { decline } } = response

    console.log('Response from the server:', decline) // eslint-disable-line no-console
    // TODO: Handle error case
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

export default withApollo(connect(mapStateToProps)(Home))
