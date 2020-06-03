import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import rrConfig from 'react-reveal/globals';
import './AboveFoldBack.css';
import graph2 from '../assets/images/graph2.svg';
import graph1 from '../assets/images/graph1.svg';

rrConfig({ ssrFadeout: true });

class AboveFoldBack extends Component {
  render() {
    return(
      <div className="skyRow">

        <div className="graph">
          <Fade left>
            <div className="text">
              Predict cellular growth and chart nerve
              regeneration with incredible precision.
            </div>
          </Fade>
        </div>
        <div className="graph">
          <Fade left delay={50}>
            <img src={graph2} alt="graph2" className="pic1"/>
          </Fade>
        </div>

        <div className="graph">
          <Fade left delay={100}>
            <div className="text">
            Using Skyline Architecture you will be able to
            see alternate dimensions as if peering through
            a mirror.
            </div>
          </Fade>
        </div>
        <div className="graph">
          <Fade left delay={150}>
            <img src={graph1} alt="graph1" className="pic2"/>
          </Fade>
        </div>

      </div>
    )
  }
}

export default AboveFoldBack;
