import React from 'react'
import { storiesOf } from '@storybook/react'
import CalculatorPanel from '../components/CalculatorPanel'
import Panel from '../components/Panel'

storiesOf('Welcome', module).add('Fee Calculator', () =>
  <div>
    <h2>Fee Calculator</h2>
    <p>This is IRCC&#39;s fee calculator.</p>
  </div>,
)

storiesOf('CalculatorPanel', module).add('CalculatorPanel', () =>
  <div>
    <h4>This is the CalculatorPanel Component</h4>
    <p>...</p>
    <CalculatorPanel />
  </div>,
)

storiesOf('Panel', module).add('Panel', () =>
  <div>
    <h4>This is the Panel Component</h4>
    <p>&lt;Panel title=&#39;This is a title&#39; width=&#39;25em&#39; /&gt;</p>
    <p>&lt;p&gt;This is text inside the panel.&lt;/p&gt;</p>
    <p>&lt;/Panel&gt;</p>
    <p>produces</p>
    <Panel title="This is a title" width="25em">
      <p>This is text inside the panel.</p>
    </Panel>
  </div>,
)
