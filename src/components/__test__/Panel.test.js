import React from 'react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'
import Panel from '../Panel'

describe('<Panel />', () => {
  it('can be rendered', () => {
    let wrapper = shallow(<Panel title="How to pay your fees" />).dive()
    expect(wrapper.is('div')).toBeTruthy()
  })

  it('displays the title', () => {
    let text = 'How to pay your fees'
    let wrapper = mount(<Panel title={text} width="30em" />)
    expect(wrapper.text()).toEqual(text)
  })
})
