import React, { Component } from "react";
import styled from "styled-components"

// custom components
import AnimatedNavbar from "./AnimatedNavbar"
import AboveFoldBack from './Components/AboveFoldBack';
import './App.css';

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
      <div className="container">
        <div className="item-a">
          <AppContainer>
            <AnimatedNavbar duration={this.state.duration} />
          </AppContainer>
        </div>
        <div className="item-b">
          <AboveFoldBackground>
            <AboveFoldBack />
          </AboveFoldBackground>
        </div>
      </div>
    );
  }
}

export default App;
