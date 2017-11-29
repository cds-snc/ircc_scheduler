import React from 'react'
import { connect } from 'react-redux'
import { setLanguage } from '../actions'
import PropTypes from 'prop-types'

const Language = props => (
  <button onClick={() => props.setLanguage(props.current_language)}>
    {props.current_language === 'en' ? 'Français' : 'English'}
  </button>
)

Language.propTypes = {
  current_language: PropTypes.string,
  setLanguage: PropTypes.func,
}

const mapStateToProps = state => ({
  current_language: state.language,
})

export default connect(mapStateToProps, { setLanguage })(Language)
