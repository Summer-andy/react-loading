import React from 'react';
import './style.scss';
const TransverseLoading = ({ style }) => {
  return (
    <div className="load-container-block" style={style}>
      <div className="load-container-transverse">
        <div className="load1"></div>
        <div className="load2"></div>
        <div className="load3"></div>
      </div>
    </div>
  );
};

export default TransverseLoading;
