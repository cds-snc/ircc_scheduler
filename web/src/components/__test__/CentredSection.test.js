import React from 'react'
import { shallow, configure } from 'enzyme'
import toJSON from 'enzyme-to-json'
import CentredSection from '../CentredSection'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<CentredSection />', () => {
  it('can be rendered', () => {
    let wrapper = shallow(<CentredSection />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('accepts a width', () => {
    let wrapper = shallow(<CentredSection width="1000%" />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
