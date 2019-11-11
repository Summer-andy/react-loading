import React from 'react';
import styles from './style.scss';
const CircleToBlockLoading = ({ style }) => {
  return (
    <div className="load-container-block" style={style}>
      <div className="circleToBlock">
        <div className="circleToBlock-item"></div>
        <div className="circleToBlock-item"></div>
        <div className="circleToBlock-item"></div>
      </div>
    </div>
  );
};

export default CircleToBlockLoading;
