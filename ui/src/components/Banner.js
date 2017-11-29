import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import SignatureBlock from './SignatureBlock'
import facepaint from 'facepaint'

const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)',
])

const AlignedRight = styled('div')`
  text-align: right;
`

const BannerBody = styled('div')`
  margin-right: auto;
  margin-left: auto;
  ${mq({
    width: ['100%', '90%', '61%'],
  })};
  &:after,
  &:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`

const LanguageSwitcher = styled('a')`
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

const Hr = styled('hr')`
  color: #335075;
  background-color: #335075;
  border: none;
  height: 0.3em;
  width: 100%;
`

const Box = styled('div')`
  padding: 0em 1em;
`

const Banner = ({ lang, changeLanguage }) => (
  <BannerBody>
    <Box>
      <AlignedRight>
        <LanguageSwitcher onClick={changeLanguage}>
          {lang === 'en' ? 'Français' : 'English'}
        </LanguageSwitcher>
      </AlignedRight>
      <SignatureBlock />
    </Box>
    <Hr />
  </BannerBody>
)

Banner.propTypes = {
  lang: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
}

export default Banner
