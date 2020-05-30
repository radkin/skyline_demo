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
              <p>time series, linear, millisecond</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color="green" />
            </div>
            <div>
              <Heading color="green">Predictive</Heading>
              <p>Machine Learning algorithm</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color="teal" />
            </div>
            <div>
              <Heading color="teal">Cybernetics</Heading>
              <p style={{ marginBottom: 0 }}>
                Flesh and machine combined perfection
              </p>
            </div>
          </li>
        </PrecisionSection>
      </DropdownSection>
      <DropdownSection>
        <SubPrecisionList>
          <li>
            <Heading noMarginBottom>Amber</Heading>
            <div>Broad spectrum stasis chambers</div>
          </li>
          <li>
            <Heading noMarginBottom>Brain</Heading>
            <div>Neurochemical enhancements</div>
          </li>
          <li>
            <Heading noMarginBottom>Shield</Heading>
            <div>Protect yourself from temporal threats</div>
          </li>
        </SubPrecisionList>
        <WorksWithStripe>
          <Heading noMarginBottom>
            <a href="https://en.wikipedia.org/wiki/White_Tulip">
              <Icon />Travel options for time and space
            </a>
          </Heading>
        </WorksWithStripe>
      </DropdownSection>
    </PrecisionDropdownEl>
  )
}

export default PrecisionDropdown
