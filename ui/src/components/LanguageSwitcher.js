import React from 'react'
import styled from 'react-emotion'
import { connect } from 'react-redux'
import { setLanguage } from '../actions'
import PropTypes from 'prop-types'

const A = styled('a')`
  text-decoration: underline;
  position: relative;
  top: 1em;
  right: 0.3em;
  font-family: Helvetica, Arial, sans-serif;
  color: #284162;
  padding: 1em 1em;
  background-color: none;
  &:visited {
    color: #7834bc;
  }
  &:hover {
    cursor: pointer;
  }
`

export const LanguageSwitcher = props => (
  <A onClick={() => props.setLanguage(props.current_language)}>
    {props.current_language === 'en' ? 'Français' : 'English'}
  </A>
)

LanguageSwitcher.propTypes = {
  current_language: PropTypes.string,
  setLanguage: PropTypes.func,
}

const mapStateToProps = state => ({
  current_language: state.language,
})

export default connect(mapStateToProps, { setLanguage })(LanguageSwitcher)
