import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Banner from '../Banner'

describe('<Banner />', () => {
  it('can be rendered', () => {
    let wrapper = shallow(<Banner lang="en" changeLanguage={jest.fn()} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
