import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Container from './Container'
import Header from './Header'

const Content = styled.div`padding: 0 0.8em;`

const Panel = ({ title, width, children }) =>
  <Container width={width}>
    <Header title={title} />
    <Content>
      {children}
    </Content>
  </Container>

Panel.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  width: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Panel
