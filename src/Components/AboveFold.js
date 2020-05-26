// You can live edit this code below the import statements
import React from 'react';
import Fade from 'react-reveal/Fade';
import rrConfig from 'react-reveal/globals';
import './AboveFold.css';
import onPerch from '../assets/images/on_perch_sm.jpg';
import whatThat from '../assets/images/what_was_that_sm.jpg';

rrConfig({ ssrFadeout: true });

class AboveFold extends React.Component {
  render() {
    return (
      <div className="foldParent">
        <div className="picContainerLeft">
          <Fade left delay={400}>
            <img src={onPerch} alt="on perch" className="pic"/>
          </Fade>
        </div>
        <Fade bottom delay={800}>
          <div className="cats">
            <h1>Cats</h1>
          </div>
        </Fade>
        <Fade bottom delay={1200}>
          <div className="fur">
            <h2>more fur than ever</h2>
          </div>
        </Fade>
        <Fade bottom delay={1500}>
          <div className="silly">
            <h2>Certainly way more silly than you or I.</h2>
          </div>
        </Fade>
        <div className="picContainerRight">
          <Fade right delay={200}>
            <img src={whatThat} alt="what was that" className="pic"/>
          </Fade>
        </div>
      </div>
    );
  }
}

export default AboveFold;
