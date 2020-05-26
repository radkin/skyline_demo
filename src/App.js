import React, { Component } from "react";
import "./App.css";
import AnimatedNavbar from "./AnimatedNavbar"
import styled from "styled-components"
import AboveFold from './Components/AboveFold';

const AppContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > div:first-of-type {
    flex: 1 0 70vh;
  }`


class App extends Component {

  state = { duration: 300 }

  onChange = data => {
    this.setState(data)
  }

  render() {
    return (
      <AppContainer>
        <AnimatedNavbar duration={this.state.duration} />
        <AboveFold />
      </AppContainer>
    );
  }
}

export default App;
