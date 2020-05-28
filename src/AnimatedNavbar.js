import React, { Component } from "react"
import Navbar from "./Navbar"
import NavbarItem from "./Navbar/NavbarItem"
import { Flipper } from "react-flip-toolkit"
import DropdownContainer from "./DropdownContainer"
import CompanyDropdown from "./DropdownContents/CompanyDropdown"
import DevelopersDropdown from "./DropdownContents/DevelopersDropdown"
import AbilitiesDropdown from "./DropdownContents/AbilitiesDropdown"
import RevealTopCat from './Components/RevealTopCat';
import './AnimatedNavbar.css';
import AboveFold from './Components/AboveFold';

const navbarConfig = [
  { title: "Abilities", dropdown: AbilitiesDropdown },
  { title: "Developers", dropdown: DevelopersDropdown },
  { title: "Company", dropdown: CompanyDropdown }
]

export default class AnimatedNavbar extends Component {
  state = {
    activeIndices: [],
    scrollPosition: 0
  }

  resetDropdownState = i => {
    this.setState({
      activeIndices: typeof i === "number" ? [i] : [],
      animatingOut: false
    })
    delete this.animatingOutTimeout
  }

  onMouseEnter = i => {
    if (this.animatingOutTimeout) {
      clearTimeout(this.animatingOutTimeout)
      this.resetDropdownState(i)
      return
    }
    if (this.state.activeIndices[this.state.activeIndices.length - 1] === i)
      return

    this.setState(prevState => ({
      activeIndices: prevState.activeIndices.concat(i),
      animatingOut: false
    }))
  }

  onMouseLeave = () => {
    this.setState({
      animatingOut: true
    })
    this.animatingOutTimeout = setTimeout(
      this.resetDropdownState,
      this.props.duration
    )
  }

  render() {
    const { duration } = this.props
    let CurrentDropdown
    let PrevDropdown
    let direction

    const currentIndex = this.state.activeIndices[
      this.state.activeIndices.length - 1
    ]
    const prevIndex =
      this.state.activeIndices.length > 1 &&
      this.state.activeIndices[this.state.activeIndices.length - 2]

    if (typeof currentIndex === "number")
      CurrentDropdown = navbarConfig[currentIndex].dropdown
    if (typeof prevIndex === "number") {
      PrevDropdown = navbarConfig[prevIndex].dropdown
      direction = currentIndex > prevIndex ? "right" : "left"
    }

    return (
      <Flipper
        flipKey={currentIndex}
        spring={duration === 300 ? "noWobble" : { stiffness: 10, damping: 10 }}
      >
        <div id="behind">
          <div id="front">
            <Navbar onMouseLeave={this.onMouseLeave}>
              {navbarConfig.map((n, index) => {
                return (
                  <NavbarItem
                    key={n.title}
                    title={n.title}
                    index={index}
                    onMouseEnter={this.onMouseEnter}
                  >
                    {currentIndex === index && (
                      <DropdownContainer
                        direction={direction}
                        animatingOut={this.state.animatingOut}
                        duration={duration}
                      >
                        <CurrentDropdown />
                        {PrevDropdown && <PrevDropdown />}
                      </DropdownContainer>
                    )}
                  </NavbarItem>
                )
              })}
            </Navbar>
          </div>
        <RevealTopCat />
        <AboveFold />
        </div>
      </Flipper>
    )
  }
}
