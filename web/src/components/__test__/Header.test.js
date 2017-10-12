import React from 'react'
import { mount, shallow, configure } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Header from '../Header'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

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
