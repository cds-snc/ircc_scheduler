import React from 'react'
import styled from 'styled-components'
import { GoCSignature } from '@cdssnc/gcui'
import PropTypes from 'prop-types'

const Padded = styled.div`padding: 0.8em 0.9em;`

const AlignedRight = styled.div`text-align: right;`

const BannerBody = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 15px 1em;
  @media (min-width: 1200px) {
    width: 61%;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 768px) {
    width: 750px;
  }
  &:after,
  &:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`

const LanguageSwitcher = styled.a`
  text-decoration: underline;
  color: #284162;
  background-color: none;
  &:visited {
    color: #7834bc;
  }
  &:hover {
    cursor: pointer;
  }
`

const Banner = ({ lang, changeLanguage }) => (
  <BannerBody>
    <AlignedRight>
      <LanguageSwitcher onClick={changeLanguage}>
        {lang === 'en' ? 'Français' : 'English'}
      </LanguageSwitcher>
    </AlignedRight>
    <Padded>
      <GoCSignature width="26em" />
    </Padded>
  </BannerBody>
)

Banner.propTypes = {
  lang: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
}

export default Banner
