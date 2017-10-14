import React from 'react'
import { Wizard, Step, Steps, Navigation } from 'react-albus'
import { Trans } from 'lingui-react'
import { Button } from '@cdssnc/gcui'
import Panel from './Panel'
import PaymentButton from './PaymentButton'

const MultiStep = () => (
  <div>
    <h3>
      <Trans>Pay your fees</Trans>
    </h3>
    <Panel width="100%" title={<Trans>How to pay your fees</Trans>}>
      <div style={{ padding: '1em 1em' }}>
        <Wizard>
          <Steps>
            <Step path="merlin">
              <h1>
                <Trans>Question 1</Trans>
              </h1>
              <Navigation
                render={({ next }) => (
                  <Button onClick={next}>
                    <Trans>Next</Trans>
                  </Button>
                )}
              />
            </Step>
            <Step path="gandalf">
              <h1>
                <Trans>Question 2</Trans>
              </h1>
              <Navigation
                render={({ next, previous }) => (
                  <div>
                    <Button onClick={next}>
                      <Trans>Next</Trans>
                    </Button>
                    <Button onClick={previous}>
                      <Trans>Previous</Trans>
                    </Button>
                  </div>
                )}
              />
            </Step>
            <Step path="dumbledore">
              <h1>
                <Trans>Question 3</Trans>
              </h1>
              <PaymentButton />
              <Navigation
                render={({ previous }) => (
                  <Button onClick={previous}>
                    <Trans>Previous</Trans>
                  </Button>
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
