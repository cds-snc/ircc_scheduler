import React from 'react'
import { mount, configure } from 'enzyme'
import Title from '../Title'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<Title />', () => {
  it('can be rendered', () => {
    let wrapper = mount(<Title>Foo</Title>)
    expect(wrapper.text()).toEqual('Foo')
  })
})
