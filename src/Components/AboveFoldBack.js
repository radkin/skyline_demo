import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import rrConfig from 'react-reveal/globals';
import './AboveFoldBack.css';
import gusPerch from '../assets/images/gus_perch_sm.jpg';
import sleepKit from '../assets/images/sleeping_kitties_sm.jpg';

rrConfig({ ssrFadeout: true });

class AboveFoldBack extends Component {
  render() {
    return(
      <div className="kittyRow">

        <div className="kitty">
          <Fade left>
            <p>They may be cute when they're sleeping</p>
            <p>but these beasties will wake you up in</p>
            <p>the middle of the night!</p>
          </Fade>
        </div>
        <div className="kitty">
          <Fade left delay={100}>
            <img src={gusPerch} alt="gus perch" className="pic"/>
          </Fade>
        </div>

        <div className="kitty">
          <Fade left delay={200}>
            <p>They may be cute when they're sleeping</p>
            <p>but these beasties will wake you up in</p>
            <p>the middle of the night!</p>
          </Fade>
        </div>
        <div className="kitty">
          <Fade left delay={300}>
            <img src={sleepKit} alt="sleeping kitties" className="pic"/>
          </Fade>
        </div>

      </div>
    )
  }
}

export default AboveFoldBack;
