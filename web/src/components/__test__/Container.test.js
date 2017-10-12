import React from 'react'
import { shallow, configure } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Container from '../Container'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

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
