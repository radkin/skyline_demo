import React, { Component } from "react"
import Navbar from "./Navbar"
import NavbarItem from "./Navbar/NavbarItem"
import { Flipper } from "react-flip-toolkit"
import DropdownContainer from "./DropdownContainer"
import CompanyDropdown from "./DropdownContents/CompanyDropdown"
import DevelopersDropdown from "./DropdownContents/DevelopersDropdown"
import ProductsDropdown from "./DropdownContents/ProductsDropdown"
import Section from "./Components/Section"
import RevealTopCat from './Components/RevealTopCat';
import './AnimatedNavbar.css';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "./logo.svg";

const navbarConfig = [
  { title: "Products", dropdown: ProductsDropdown },
  { title: "Developers", dropdown: DevelopersDropdown },
  { title: "Company", dropdown: CompanyDropdown },
  { title: "Section1", dropdown: Section },
  { title: "Section2", dropdown: Section },
  { title: "Section3", dropdown: Section }
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

  scrollToTop = () => {
      scroll.scrollToTop();
    };

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
        </div>
      </Flipper>
    )
  }
}


// <li className="nav-item">
//   <Link
//     activeClass="active"
//     to="section5"
//     spy={true}
//     smooth={true}
//     offset={-70}
//     duration={500}
//   >
//     Section 5
//   </Link>
