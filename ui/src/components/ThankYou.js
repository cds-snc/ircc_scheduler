import React from 'react'
import { connect } from 'react-redux'
import styles from '../css/ThankYou'

const ThankYou = () => (
  <div className={styles.list}>
    <div className={styles.title}>Thank you.</div>

    <div className={styles.content}>
      <p>Thank you</p>
      <p>
        We have recieved your details and will let you know when the next
        ceremony is scheduled.Thank you
      </p>
    </div>
  </div>
)

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(ThankYou)
