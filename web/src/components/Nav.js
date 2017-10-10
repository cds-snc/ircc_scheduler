import React from 'react'
import styled from 'styled-components'
import { Trans } from 'lingui-react'
import { DownwardChevron } from '@cdssnc/gcui'

const NavBlock = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background-color: rgb(51, 80, 117);
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  height: 55px;
  line-height: 23px;
  text-size-adjust: 100%;
  width: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const Category = styled.li`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  padding: 1em;
  text-align: center;
  border-left: 1px solid #999;
  border-right: 1px solid #999;
`

const Ul = styled.ul`
  margin: 0;
`

const Nav = () => (
  <NavBlock>
      <Ul>
        <Category>
          <a>
            <Trans>Jobs</Trans>
          </a>
          <DownwardChevron />
        </Category>
        <Category>
          <a>
            <Trans>Immigration</Trans>
          </a>
          <DownwardChevron />
        </Category>
        <Category>
          <a>
            <Trans>Travel</Trans>
          </a>
          <DownwardChevron />
        </Category>
        <Category>
          <a>
            <Trans>Business</Trans>
          </a>
          <DownwardChevron />
        </Category>
        <Category>
          <a>
            <Trans>Benefits</Trans>
          </a>
          <DownwardChevron />
        </Category>
        <Category>
          <a>
            <Trans>Health</Trans>
          </a>
          <DownwardChevron />
        </Category>
        <Category>
          <a>
            <Trans>Taxes</Trans>
          </a>
          <DownwardChevron />
        </Category>
        <Category>
          <a>
            <Trans>More services</Trans>
          </a>
          <DownwardChevron />
        </Category>
      </Ul>
  </NavBlock>
)

export default Nav
