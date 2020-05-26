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
          <Fade left>
            <img src={onPerch} alt="on perch" className="pic"/>
          </Fade>
        </div>
        <Fade bottom>
          <div className="fur">
            <h1>Cats, more fur than ever</h1>
          </div>
        </Fade>
        <div className="picContainerRight">
          <Fade right>
            <img src={whatThat} alt="what was that" className="pic"/>
          </Fade>
        </div>
      </div>
    );
  }
}

export default AboveFold;
