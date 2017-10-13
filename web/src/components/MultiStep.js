import React from 'react'
import { Wizard, Step, Steps, Navigation } from 'react-albus'
import { Trans } from 'lingui-react'
import { Button } from '@cdssnc/gcui'
import Panel from './Panel'
import PaymentButton from './PaymentButton'

const MultiStep = () => (
  <div>
    <h3>Pay your fees</h3>
    <Panel width="100%" title={<Trans>How to pay your fees</Trans>}>
      <div style={{ padding: '1em 1em' }}>
        <Wizard>
          <Steps>
            <Step path="merlin">
              <h1>Question 1</h1>
              <Navigation
                render={({ next }) => <Button onClick={next}>Next</Button>}
              />
            </Step>
            <Step path="gandalf">
              <h1>Question 2</h1>
              <Navigation
                render={({ next, previous }) => (
                  <div>
                    <Button onClick={next}>Next</Button>
                    <Button onClick={previous}>Previous</Button>
                  </div>
                )}
              />
            </Step>
            <Step path="dumbledore">
              <h1>Question 3</h1>
              <PaymentButton />
              <Navigation
                render={({ previous }) => (
                  <Button onClick={previous}>Previous</Button>
                )}
              />
            </Step>
          </Steps>
        </Wizard>
      </div>
    </Panel>
  </div>
)

export default MultiStep
