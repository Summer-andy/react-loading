import React from 'react';
import './style.scss';
const WaveLoading = ({ style }) => {
  return (
    <div className="load-container" style={style}>
      <div className="container">
        <div className="boxLoading1"></div>
        <div className="boxLoading2"></div>
        <div className="boxLoading3"></div>
        <div className="boxLoading4"></div>
        <div className="boxLoading5"></div>
      </div>
    </div>
  );
};

export default WaveLoading;
