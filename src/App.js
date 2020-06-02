import React, { Component } from "react";
import AnimatedNavbar from "./AnimatedNavbar"
import styled from "styled-components"
import AboveFoldBack from './Components/AboveFoldBack';

const AppContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > div:first-of-type {
    flex: 1 0 70vh;
  }`

const AboveFoldBackground = styled.div`
  background: white;
  width: 100%;'
`;

class App extends Component {

  state = { duration: 300 }

  onChange = data => {
    this.setState(data)
  }

  render() {
    return (
      <div>
        <AppContainer>
          <AnimatedNavbar duration={this.state.duration} />
        </AppContainer>
        <AboveFoldBackground>
          <AboveFoldBack />
        </AboveFoldBackground>
      </div>
    );
  }
}

export default App;
