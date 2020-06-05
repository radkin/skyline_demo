import React, { Component } from "react";
import styled from "styled-components"

// custom components
import AnimatedNavbar from "./AnimatedNavbar"
// import AboveFoldBack from './Components/AboveFoldBack';
import './App.css';
import Footer from './Hamburger/Footer';

const AppContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > div:first-of-type {
    flex: 1 0 70vh;
  }`

// const AboveFoldBackground = styled.div`
//   background: white;
//   width: 100%;'
// `;

class App extends Component {

  state = { duration: 300 }

  onChange = data => {
    this.setState(data)
  }

  render() {
    const styles = {
      body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        filter: this.state.menuOpen ? 'blur(2px)':null,
        transition: 'filter 0.5s ease',
      }
    }
    return (
      <div className="container">
        <div className="item-a">
          <AppContainer>
            <AnimatedNavbar duration={this.state.duration} />
          </AppContainer>
        </div>
        <div style={styles.body}>
          <Footer name='Menu'/>
        </div>
      </div>
    );
  }
}

export default App;

/*
<div className="item-e">
  <AboveFoldBackground>
    <AboveFoldBack />
  </AboveFoldBackground>
</div>
*/
