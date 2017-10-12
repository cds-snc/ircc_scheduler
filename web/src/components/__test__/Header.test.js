import React from 'react'
import { mount, shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Header from '../Header'

describe('<Header />', () => {
  it('can be rendered', () => {
    let wrapper = shallow(<Header title="Foo" />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('displays a title supplied by props', () => {
    let wrapper = mount(<Header title="Foo" />)
    expect(wrapper.text()).toEqual('Foo')
  })

  it('displays a title supplied by props', () => {
    let wrapper = mount(<Header title="Foo" />)
    expect(wrapper.text()).toEqual('Foo')
  })

  it('has a blue background', () => {
    let wrapper = shallow(<Header title="Foo" />).dive()
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
