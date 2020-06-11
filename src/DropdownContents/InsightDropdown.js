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
          <p>Custom Predictive Algorithms</p>
          <Flex>
            <div>
              <h4>Get Started</h4>
              <LinkList>
                <li>
                  {/* eslint-disable-next-line */}
                  <a
                    href="#">
                    Statistics
                  </a>
                </li>
                <li>
                  {/* eslint-disable-next-line */}
                  <a
                    href="#">
                    Machine Learning
                  </a>
                </li>
                <li>
                  {/* eslint-disable-next-line */}
                  <a
                    href="#">
                    Cranial Nerve Augmentation
                    </a>
                </li>
              </LinkList>
            </div>
            <div>
              <h4>Popular Imrovements</h4>
              <LinkList>
                <li>
                  {/* eslint-disable-next-line */}
                  <a
                    href="#">
                    Cortex Nerve Density
                  </a>
                </li>
                <li>
                  {/* eslint-disable-next-line */}
                  <a
                    href="#">
                    Cortexifan Treatment
                    </a>
                </li>
                <li>
                  {/* eslint-disable-next-line */}
                  <a
                    href="#">
                    Cellular Regeneration
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
            {/* eslint-disable-next-line */}
            <a
              href="#">
              <Icon />NeoGenesis
            </a>
          </HeadingLink>
          <HeadingLink>
            {/* eslint-disable-next-line */}
            <a
              href="#">
              <Icon />Teleportation
            </a>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            {/* eslint-disable-next-line */}
            <a
              href="#">
              <Icon />New Research
            </a>
          </HeadingLink>
        </ul>
      </DropdownSection>
    </InsightDropdownEl>
  )
}

export default InsightDropdown
