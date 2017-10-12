import React from 'react'
import { shallow, configure } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Banner from '../Banner'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<Banner />', () => {
  it('can be rendered', () => {
    let wrapper = shallow(<Banner lang="en" changeLanguage={jest.fn()} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
