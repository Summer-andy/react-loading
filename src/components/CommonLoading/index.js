import React from 'react';
import  './index.scss';
const CommonLoading = ({ style }) => {
  return (
    <svg id="load" x="0px" y="0px" viewBox="0 0 150 150" style={style}>
    <circle id="loading-inner" cx="75" cy="75" r="60"/>
  </svg>
  );
};

export default CommonLoading;