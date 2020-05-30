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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://fringe.fandom.com/wiki/Synaptic_Transfer">
              <Icon />Synaptic Transfer
            </a>
          </HeadingLink>
          <HeadingLink>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://fringe.fandom.com/wiki/Rapid_skin_growth_toxin">
              <Icon />Rapid Skin Growth Toxin
            </a>
          </HeadingLink>
          <HeadingLink>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.popularmechanics.com/culture/tv/a5477/4344500/">
              <Icon />Targeted Genetics
            </a>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://fringe.fandom.com/wiki/Alternate_Universe">
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://fringe.fandom.com/wiki/The_Zodiac_Paradox">
                Zodiac Paradox &rsaquo;
                </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Transhumanism">
                Enhance physiology and intellect &rsaquo;
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Technological_singularity">
                Unforeseeable changes to human civilization &rsaquo;</a>
            </li>
          </LinkList>
        </div>
      </DropdownSection>
    </ResearchDropdownEl>
  )
}

export default ResearchDropdown
