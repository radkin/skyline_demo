import React from 'react';
import Fade from 'react-reveal/Fade';
import rrConfig from 'react-reveal/globals';
import './AboveFold.css';
import building1 from '../assets/images/Building1.svg';
import building2 from '../assets/images/building2.svg';

rrConfig({ ssrFadeout: true });

class AboveFold extends React.Component {
  render() {
    return (
      <div className="foldParent">
        <div className="picContainerLeft">

          <div>
            <Fade left delay={400}>
              <img src={building2} alt="building2"/>
            </Fade>
          </div>
        </div>
          <Fade bottom delay={800}>
            <div className="sky">
              <h1>Skyline</h1>
              <Fade bottom delay={1200}>
                <div className="pr">
                  <h2>Precision</h2>
                  <Fade bottom delay={1700}>
                    <div className="in">
                      <h2>Insight</h2>
                    </div>
                  </Fade>
                </div>
              </Fade>
            </div>
          </Fade>

        <div className="picContainerRight">
          <Fade right delay={200}>
            <img src={building1} alt="building1"/>
          </Fade>
        </div>
      </div>
    );
  }
}

export default AboveFold;
