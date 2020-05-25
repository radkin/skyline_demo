import React, { Component } from "react";
import "./App.css";
// import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import AnimatedNavbar from "./AnimatedNavbar"
import styled from "styled-components"

const AppContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > div:first-of-type {
    flex: 1 0 70vh;
  }
`

class App extends Component {

  state = { duration: 300 }

  onChange = data => {
    this.setState(data)
  }

  render() {
    return (
      <AppContainer>
        <AnimatedNavbar duration={this.state.duration} />
        <div>
          <Section
            title="Section 1"
            subtitle={dummyText}
            dark={true}
            id="section1"
          />
          <Section
            title="Section 2"
            subtitle={dummyText}
            dark={false}
            id="section2"
          />
          <Section
            title="Section 3"
            subtitle={dummyText}
            dark={true}
            id="section3"
          />
          <Section
            title="Section 4"
            subtitle={dummyText}
            dark={false}
            id="section4"
          />
          <Section
            title="Section 5"
            subtitle={dummyText}
            dark={true}
            id="section5"
          />
        </div>
      </AppContainer>
    );
  }
}

export default App;

/*
<div className="App">
  <Navbar />
  <RevealTopCat />
</div>
*/
