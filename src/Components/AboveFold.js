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
              <img src={building2} alt="building2" className="pic"/>
            </Fade>
          </div>
        </div>
          <Fade bottom delay={800}>
            <div className="cats">
              <h1>Cats</h1>
              <Fade bottom delay={1200}>
                <div className="fur">
                  <h2>More fur than ever</h2>
                  <Fade bottom delay={1700}>
                    <div className="silly">
                      <h2>Sillier than you or I</h2>
                    </div>
                  </Fade>
                </div>
              </Fade>
            </div>
          </Fade>

        <div className="picContainerRight">
          <Fade right delay={200}>
            <img src={building1} alt="building1" className="pic"/>
          </Fade>
        </div>
      </div>
    );
  }
}

export default AboveFold;
