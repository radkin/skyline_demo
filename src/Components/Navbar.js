import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import Progress from './Progress';

export default class Navbar extends Component {
  state = {
    scrollPosition: 0
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        // Calculates the scroll distance
        this.calculateScrollDistance();
      });
    });
  };

  calculateScrollDistance  =  ()  =>  {
    const  scrollTop  =  window.pageYOffset;
    const  winHeight  =  window.innerHeight;
    const  docHeight  =  this.getDocHeight();

    const  totalDocScrollLength = docHeight  -  winHeight;
    const  scrollPostion  =  Math.floor(scrollTop  /  totalDocScrollLength  *  100);

    this.setState({
      scrollPostion,
    });
  }

  getDocHeight  =  ()  =>  {
    return Math.max(
      document.body.scrollHeight,  document.documentElement.scrollHeight,
      document.body.offsetHeight,  document.documentElement.offsetHeight,
      document.body.clientHeight,  document.documentElement.clientHeight
    );
  }

  componentDidMount()  {
    this.listenToScrollEvent();
  }

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 3
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 4
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 5
              </Link>
            </li>
          </ul>
        </div>
        <Progress  scroll={ this.state.scrollPostion  +  '%' }  />
      </nav>
    );
  }
}
