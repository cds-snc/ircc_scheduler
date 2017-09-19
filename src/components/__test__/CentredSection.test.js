
import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import 'jest-styled-components'
import CentredSection from '../CentredSection'

describe('<CentredSection />', () => {
  it('can be rendered', () => {
    let wrapper = shallow(<CentredSection />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('accepts a width', () => {
    let wrapper = shallow(<CentredSection width="1000%"/>)
    expect(toJSON(wrapper)).toHaveStyleRule('width', '1000%')
  })
})
