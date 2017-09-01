import React from 'react'
import { mount, shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import 'jest-styled-components'
import Header from '../Header'

describe('<Header />', () => {
  it('can be rendered', () => {
    let wrapper = mount(<Header title="Foo" />)
    expect(wrapper.find('h2').text()).toEqual('Foo')
  })

  it('displays a title supplied by props', () => {
    let wrapper = mount(<Header title="Foo" />)
    expect(wrapper.text()).toEqual('Foo')
  })

  it('has a blue background', () => {
    let wrapper = shallow(<Header title="Foo" />).dive()
    expect(toJSON(wrapper)).toHaveStyleRule('background-color', '#2572b4')
  })
})
