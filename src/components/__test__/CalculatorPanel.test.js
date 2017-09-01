import React from 'react'
import { shallow } from 'enzyme'
import CalculatorPanel from '../CalculatorPanel'

describe('<CalculatorPanel />', () => {
  it('can be rendered', () => {
    let wrapper = shallow(<CalculatorPanel />)
    expect(wrapper.is('Panel')).toBeTruthy()
  })
})
