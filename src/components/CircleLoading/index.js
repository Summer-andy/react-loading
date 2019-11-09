import React from 'react';
import './style.scss';
const CircleLoading = ({ style }) => {
  return (
    <div className="load-container-block" style={style}>
      <div className="load"></div>
    </div>
  );
};

export default CircleLoading;
