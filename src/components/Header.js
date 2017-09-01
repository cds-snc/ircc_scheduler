import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Title from './Title'

const Div = styled.div`
  color: #fff;
  background-color: #2572b4;
  border-color: #2572b4;
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`

const Header = ({ title }) =>
  <Div>
    <Title>
      {title}
    </Title>
  </Div>

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
