import React, { Component } from "react";
import classnames from "classnames";

// custom components
import Navbar from "./Navbar";
import NavbarItem from "./Navbar/NavbarItem";
import { Flipper } from "react-flip-toolkit";
import DropdownContainer from "./DropdownContainer";
import ResearchDropdown from "./DropdownContents/ResearchDropdown";
import InsightDropdown from "./DropdownContents/InsightDropdown";
import PrecisionDropdown from "./DropdownContents/PrecisionDropdown";
import RevealSkyline from './Components/RevealSkyline';
import './AnimatedNavbar.css';
import { Main } from './Hamburger';

const navbarConfig = [
  { title: "Precision", dropdown: PrecisionDropdown },
  { title: "Insight", dropdown: InsightDropdown },
  { title: "Research", dropdown: ResearchDropdown }
]

export default class AnimatedNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      activeIndices: [],
      scrollPosition: 0
    };
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

  // hide & reveal logic for animated nav
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
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
        className={classnames("navbar", {
          "navbar--hidden": !this.state.visible
        })}
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
            <Main />
          </div>
        <RevealSkyline />
        </div>
      </Flipper>
    )
  }
}
