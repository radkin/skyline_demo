import React from "react"
import styled from "styled-components"
import { Icon, DropdownSection, Heading } from "./Components"

const AbilitiesDropdownEl = styled.div`
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

const SubAbilitiesList = styled.ul`
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

const AbilitiesSection = styled.ul`
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

const AbilitiesDropdown = () => {
  return (
    <AbilitiesDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <AbilitiesSection>
          <li>
            <div>
              <Logo color="blue" />
            </div>
            <div>
              <Heading color="blue">Mice and Birds</Heading>
              <p>Small critters, tasty treats</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color="green" />
            </div>
            <div>
              <Heading color="green">Ear Position</Heading>
              <p>Use our keen hearing to listen for mice</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color="teal" />
            </div>
            <div>
              <Heading color="teal">Acrobatics</Heading>
              <p style={{ marginBottom: 0 }}>
                Doing flips in the air allows you to land on anything
              </p>
            </div>
          </li>
        </AbilitiesSection>
      </DropdownSection>
      <DropdownSection>
        <SubAbilitiesList>
          <li>
            <Heading noMarginBottom>See</Heading>
            <div>Broad spectrum vision with three cones</div>
          </li>
          <li>
            <Heading noMarginBottom>Hear</Heading>
            <div>Sound localization and broader range</div>
          </li>
          <li>
            <Heading noMarginBottom>Smell</Heading>
            <div>200 million scent receptors</div>
          </li>
        </SubAbilitiesList>
        <WorksWithStripe>
          <Heading noMarginBottom>
            <a href="/">
              <Icon /> Nose prints for unique id
            </a>
          </Heading>
        </WorksWithStripe>
      </DropdownSection>
    </AbilitiesDropdownEl>
  )
}

export default AbilitiesDropdown
