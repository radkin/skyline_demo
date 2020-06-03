import React from 'react';
import Zoom from 'react-reveal/Zoom';
import rrConfig from 'react-reveal/globals';

import './RevealSkyline.css';

rrConfig({ ssrFadeout: true });

class ZoomExample extends React.Component {
  render() {
    return (
      <div className="skyBack">
        <Zoom>
          <img src={require('../assets/images/header.jpg')} alt="city skyline" className="photo"/>
        </Zoom>
      </div>
    );
  }
}

export default ZoomExample;
