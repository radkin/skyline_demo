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
      <div className="kittyRow">

        <div className="graph">
          <Fade left>
            <div>
              They may be cute when they're sleeping
              but these beasties will wake you up in
              the middle of the night!
            </div>
          </Fade>
        </div>
        <div className="graph">
          <Fade left delay={100}>
            <img src={graph2} alt="graph2" className="pic"/>
          </Fade>
        </div>

        <div className="graph">
          <Fade left delay={200}>
            <div>
              They may be cute when they're sleeping
              but these beasties will wake you up in
              the middle of the night!
            </div>
          </Fade>
        </div>
        <div className="graph">
          <Fade left delay={300}>
            <img src={graph1} alt="graph1" className="pic"/>
          </Fade>
        </div>

      </div>
    )
  }
}

export default AboveFoldBack;
