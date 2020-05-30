import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import rrConfig from 'react-reveal/globals';
import './People.css';
import woman1 from '../assets/images/woman1.svg';
import woman2 from '../assets/images/woman2.svg';
import man1 from '../assets/images/man1.svg';
import man2 from '../assets/images/man2.svg';

rrConfig({ ssrFadeout: true });

class People extends Component {
  render() {
    return(
      <div className="people">

        <div className="person">
          <Fade left delay={100}>
            <img src={woman1} alt="woman1" className="pic1"/>
          </Fade>
        </div>

        <div className="person">
          <Fade left delay={100}>
            <img src={man1} alt="man1" className="pic1"/>
          </Fade>
        </div>

        <div className="person">
          <Fade left delay={100}>
            <img src={woman2} alt="woman2" className="pic1"/>
          </Fade>
        </div>

        <div className="person">
          <Fade left delay={100}>
            <img src={man2} alt="man2" className="pic1"/>
          </Fade>
        </div>

      </div>
    )
  }
}

export default People;
