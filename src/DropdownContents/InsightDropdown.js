import React from "react"
import styled from "styled-components"
import {
  Icon,
  DropdownSection,
  Heading,
  HeadingLink,
  LinkList
} from "./Components"

const InsightDropdownEl = styled.div`
  width: 25rem;
`

const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
`

const InsightDropdown = () => {
  return (
    <InsightDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <div>
          <Heading>Documentation</Heading>
          <p>Custom predictive algorithms</p>
          <Flex>
            <div>
              <h4>Get Started</h4>
              <LinkList>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.ratingraph.com/tv-shows/fringe-ratings-30746/">
                    Statistics
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://24.media.tumblr.com/aad7b9a2eb41722ace3065ec77a94706/tumblr_mk1dejHWVB1rzirmio1_500.jpg">
                    Machine Learning
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.imdb.com/title/tt1537548/">
                    Cranial nerve augmentation
                    </a>
                </li>
              </LinkList>
            </div>
            <div>
              <h4>Popular Imrovements</h4>
              <LinkList>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://fringe.fandom.com/wiki/Cortexiphan">
                    Cortex Nerve Density
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://ih1.redbubble.net/image.13349442.1611/fc,550x550,navy.jpg">
                    Cortexifan treatment
                    </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://en.wikipedia.org/wiki/Brave_New_World_(Fringe)">
                    Cellular regeneration
                  </a>
                </li>
              </LinkList>
            </div>
          </Flex>
        </div>
      </DropdownSection>
      <DropdownSection>
        <ul>
          <HeadingLink>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://fringe.fandom.com/wiki/Neogenesis">
              <Icon />NeoGenesis
            </a>
          </HeadingLink>
          <HeadingLink>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://fringe.fandom.com/wiki/Teleportation_device">
              <Icon />Teleportation
            </a>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://fringe.fandom.com/wiki/Harvard_Laboratory">
              <Icon />New Research
            </a>
          </HeadingLink>
        </ul>
      </DropdownSection>
    </InsightDropdownEl>
  )
}

export default InsightDropdown
