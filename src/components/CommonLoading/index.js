import React from 'react';
import './style.scss';
import { commonStyle } from '../utils/style';
const CommonLoading = ({ style = commonStyle, color }) => {
  return (
    <div style={{ width: 100, height: 100, ...style}}>
      <svg id="load" x="0px" y="0px" viewBox="0 0 150 150" sty >
        <circle id="loading-inner" cx="75" cy="75" r="60" stroke={color || '#00adb5'}  />
      </svg>
    </div>
  );
};

export default CommonLoading;
