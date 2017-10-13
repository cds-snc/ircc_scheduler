import React from 'react'
import { mount, shallow, configure } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Panel from '../Panel'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<Panel />', () => {
  it('can be rendered', () => {
    let wrapper = shallow(<Panel title="How to pay your fees" />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('displays the title', () => {
    let text = 'How to pay your fees'
    let wrapper = mount(<Panel title={text} width="30em" />)
    expect(wrapper.text()).toEqual(text)
  })
})
