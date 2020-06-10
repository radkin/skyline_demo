import React from "react"
import styled from "styled-components"
import { Icon, DropdownSection, Heading } from "./Components"

const PrecisionDropdownEl = styled.div`
  width: 30rem;
`

const Logo = styled.div`
  width: 38px;
  height: 38px;
  margin-right: 16px;
  border-radius: 100%;
  opacity: 0.6;
  background-color: ${({ color }) => `var(--${color})`};
`

const SubPrecisionList = styled.ul`
  li {
    display: flex;
    margin-bottom: 1rem;
  }
  h3 {
    margin-right: 1rem;
    width: 3.2rem;
    display: block;
  }
  a {
    color: var(--dark-grey);
  }
`

const PrecisionSection = styled.ul`
  li {
    display: flex;
  }
`

const WorksWithStripe = styled.div`
 border-top: 2px solid #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--spacer);
  padding-top: var(--spacer);
}
h3 {
  margin-bottom: 0;
}
`

const PrecisionDropdown = () => {
  return (
    <PrecisionDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <PrecisionSection>
          <li>
            <div>
              <Logo color="blue" />
            </div>
            <div>
              <Heading color="blue">Metrics</Heading>
              <p>Time Series, Linear, Millisecond</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color="green" />
            </div>
            <div>
              <Heading color="green">Predictive</Heading>
              <p>Machine Learning Algorithm</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color="teal" />
            </div>
            <div>
              <Heading color="teal">Cybernetics</Heading>
              <p style={{ marginBottom: 0 }}>
                Flesh and Machine Combined Perfection
              </p>
            </div>
          </li>
        </PrecisionSection>
      </DropdownSection>
      <DropdownSection>
        <SubPrecisionList>
          <li>
            <Heading noMarginBottom>Amber</Heading>
            <div>Broad Spectrum Stasis Chambers</div>
          </li>
          <li>
            <Heading noMarginBottom>Brain</Heading>
            <div>Neurochemical Enhancements</div>
          </li>
          <li>
            <Heading noMarginBottom>Shield</Heading>
            <div>Protect Yourself from Temporal Threats</div>
          </li>
        </SubPrecisionList>
        <WorksWithStripe>
          <Heading noMarginBottom>
            {/* eslint-disable-next-line */}
            <a href="#">
              <Icon />Travel Options for Time and Space
            </a>
          </Heading>
        </WorksWithStripe>
      </DropdownSection>
    </PrecisionDropdownEl>
  )
}

export default PrecisionDropdown
