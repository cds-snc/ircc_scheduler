import React from 'react'
import { shallow, configure } from 'enzyme'
import CalculatorPanel from '../CalculatorPanel'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<CalculatorPanel />', () => {
  it('can be rendered', () => {
    let wrapper = shallow(<CalculatorPanel />)
    expect(wrapper.is('Panel')).toBeTruthy()
  })
})
