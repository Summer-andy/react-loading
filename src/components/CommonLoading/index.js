import React from 'react';
import './style.scss';
const CommonLoading = ({ style, color }) => {
  return (
      <svg id="load" x="0px" y="0px" viewBox="0 0 150 150" style={style}>
        <circle id="loading-inner" cx="75" cy="75" r="60" stroke={color || '#00adb5'}  />
      </svg>
  );
};

export default CommonLoading;
