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
            {/* eslint-disable-next-line */}
            <a
              href="#">
              <Icon />Synaptic Transfer
            </a>
          </HeadingLink>
          <HeadingLink>
            {/* eslint-disable-next-line */}
            <a
              href="#">
              <Icon />Rapid Skin Growth Toxin
            </a>
          </HeadingLink>
          <HeadingLink>
            {/* eslint-disable-next-line */}
            <a
              href="#">
              <Icon />Targeted Genetics
            </a>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            {/* eslint-disable-next-line */}
            <a
              href="#">
              <Icon />Multidimensional Travel
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
              {/* eslint-disable-next-line */}
              <a
                href="#">
                Zodiac Paradox &rsaquo;
                </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a
                href="#">
                Enhance Physiology and Intellect &rsaquo;
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a
                href="#">
                Unforeseeable Changes to Human Civilization &rsaquo;</a>
            </li>
          </LinkList>
        </div>
      </DropdownSection>
    </ResearchDropdownEl>
  )
}

export default ResearchDropdown
