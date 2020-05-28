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
            <div>
              They may be cute when they're sleeping
              but these beasties will wake you up in
              the middle of the night!
            </div>
          </Fade>
        </div>
        <div className="kitty">
          <Fade left delay={100}>
            <img src={gusPerch} alt="gus perch" className="pic"/>
          </Fade>
        </div>

        <div className="kitty">
          <Fade left delay={200}>
            <div>
              They may be cute when they're sleeping
              but these beasties will wake you up in
              the middle of the night!
            </div>
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
