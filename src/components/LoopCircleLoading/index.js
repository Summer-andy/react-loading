import React from 'react';
import  './style.scss';
const LoopCircleLoading = ({ style }) => {
  return (
    <div className="load-container-block" style={style}>
    <div className="load-container-loopCircle">
      <div className="container container1">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
      </div>
      <div className="container container2">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
      </div>
      <div className="container container3">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
      </div>
    </div>
    </div>
  );
};

export default LoopCircleLoading;
