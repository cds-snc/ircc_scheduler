import React from 'react'
import { mount } from 'enzyme'
import 'jest-styled-components'
import Title from '../Title'

describe('<Title />', () => {
  it('can be rendered', () => {
    let wrapper = mount(<Title>Foo</Title>)
    expect(wrapper.text()).toEqual('Foo')
  })
})
