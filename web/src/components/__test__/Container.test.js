import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Container from '../Container'

describe('<Container />', () => {
  it('can be rendered', () => {
    let wrapper = shallow(<Container width="1000%" />)
    expect(wrapper.is('div')).toBeTruthy()
  })

  it('accepts a width prop', () => {
    let wrapper = shallow(<Container width="1000%" />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
