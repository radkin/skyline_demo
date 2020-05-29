import React from "react"
import styled from "styled-components"
import {
  Heading,
  HeadingLink,
  LinkList,
  DropdownSection,
  Icon
} from "./Components"

const ResearchDropdownEl = styled.div`
  width: 18.5rem;
`

const ResearchDropdown = () => {
  return (
    <ResearchDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ul>
          <HeadingLink>
            <a href="/">
              <Icon /> About Research
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon />Cortexifan Trials
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon />Genetic Manipulation
            </a>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            <a href="/">
              <Icon />Multidimentional Travel
            </a>
          </HeadingLink>
        </ul>
      </DropdownSection>
      <DropdownSection>
        <div>
          <Heading>
            <Icon />Interactive
          </Heading>
          <LinkList marginLeft="25px">
            <li>
              <a href="/">Self healing machines &rsaquo;</a>
            </li>
            <li>
              <a href="/">Self Awareness and AI &rsaquo;</a>
            </li>
            <li>
              <a href="/">Personal Chemical Augmentation &rsaquo;</a>
            </li>
          </LinkList>
        </div>
      </DropdownSection>
    </ResearchDropdownEl>
  )
}

export default ResearchDropdown
