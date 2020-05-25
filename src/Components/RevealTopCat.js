// You can live edit this code below the import statements
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import rrConfig from 'react-reveal/globals';
import './RevealTopCat.css';

rrConfig({ ssrFadeout: true });

class ZoomExample extends React.Component {
  render() {
    return (
      <div className="catBack">
        <Zoom>
          <img src={require('../cat.jpg')} alt="top cat" className="photo"/>
        </Zoom>
      </div>
    );
  }
}

export default ZoomExample;
