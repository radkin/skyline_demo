import React from "react"
import styled from "styled-components"
import {
  Heading,
  HeadingLink,
  LinkList,
  DropdownSection,
  Icon
} from "./Components"

const PlayDropdownEl = styled.div`
  width: 18.5rem;
`

const PlayDropdown = () => {
  return (
    <PlayDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ul>
          <HeadingLink>
            <a href="/">
              <Icon /> About Play
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon />Crackle Paper
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon />Feather Toys
            </a>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            <a href="/">
              <Icon />Scratching Posts
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
              <a href="/">360 degree self rotating ball &rsaquo;</a>
            </li>
            <li>
              <a href="/">Self Groomer &rsaquo;</a>
            </li>
            <li>
              <a href="/">Squeaky mouse hunter &rsaquo;</a>
            </li>
          </LinkList>
        </div>
      </DropdownSection>
    </PlayDropdownEl>
  )
}

export default PlayDropdown
