import React from 'react';
import './style.scss';
const BoxLoading = ({ style }) => {
  return (
    <div className="load-container" style={style}>
      <div className="boxLoading"></div>
    </div>
  );
};

export default BoxLoading;
