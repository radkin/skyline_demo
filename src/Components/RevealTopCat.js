// You can live edit this code below the import statements
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './RevealTopCat.css';

class ZoomExample extends React.Component {
  render() {
    return (
      <div className="catBack">
        <Zoom duration={3000}>
          <img src={require('../cat.jpg')} alt="top cat" className="photo"/>
        </Zoom>
      </div>
    );
  }
}

export default ZoomExample;
