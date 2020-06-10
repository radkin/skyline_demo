import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import rrConfig from 'react-reveal/globals';

// custom components
import AnimatedNavbar from "./AnimatedNavbar"
import AboveFold from './Components/AboveFold';
// import AboveFoldBack from './Components/AboveFoldBack';
import './App.css';
import building1 from './assets/images/Building1.svg';
import building2 from './assets/images/building2.svg';

rrConfig({ ssrFadeout: true });

class App extends Component {

  state = { duration: 300 }

  onChange = data => {
    this.setState(data)
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <AnimatedNavbar duration={this.state.duration} />
        </div>

        <div className="picContainerLeft">
          <Fade left delay={400}>
            <img src={building1} alt="building1"/>
          </Fade>
        </div>

        <div className="main">
          <AboveFold />
        </div>

        <div className="picContainerRight">
          <Fade right delay={200}>
            <img src={building2} alt="building2"/>
          </Fade>
        </div>

        <div className="item-c">
        </div>
      </div>
    );
  }
}

export default App;
