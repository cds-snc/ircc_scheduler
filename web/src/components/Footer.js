import React from 'react'
import styled from 'react-emotion'
import { WordMark } from '@cdssnc/gcui'
import CentredSection from './CentredSection'

const Branding = styled.footer`
  background: #f8f8f8;
  border-top: 4px solid #335175;
  line-height: 30px;
  right: 0;
  bottom: 0;
  width: 100%;
  text-align: right;
  padding: 1em;
  position: fixed;
`
const Footer = () => (
  <Branding>
    <CentredSection>
      <WordMark />
    </CentredSection>
  </Branding>
)

export default Footer
