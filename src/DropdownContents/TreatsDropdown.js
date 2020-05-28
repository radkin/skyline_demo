import React from "react"
import styled from "styled-components"
import {
  Icon,
  DropdownSection,
  Heading,
  HeadingLink,
  LinkList
} from "./Components"

const TreatsDropdownEl = styled.div`
  width: 25rem;
`

const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
`

const TreatsDropdown = () => {
  return (
    <TreatsDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <div>
          <Heading>Documentation</Heading>
          <p>How to make your own treats</p>
          <Flex>
            <div>
              <h4>Get Started</h4>
              <LinkList>
                <li>
                  <a href="/">Greenies</a>
                </li>
                <li>
                  <a href="/">Wet</a>
                </li>
                <li>
                  <a href="/">Dry</a>
                </li>
              </LinkList>
            </div>
            <div>
              <h4>Popular Flavors</h4>
              <LinkList>
                <li>
                  <a href="/">Tuna</a>
                </li>
                <li>
                  <a href="/">Chicken</a>
                </li>
                <li>
                  <a href="/">Salmon</a>
                </li>
              </LinkList>
            </div>
          </Flex>
        </div>
      </DropdownSection>
      <DropdownSection>
        <ul>
          <HeadingLink>
            <a href="/">
              <Icon /> Formulas
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon /> Locations
            </a>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            <a href="/">
              <Icon /> New Prey
            </a>
          </HeadingLink>
        </ul>
      </DropdownSection>
    </TreatsDropdownEl>
  )
}

export default TreatsDropdown
