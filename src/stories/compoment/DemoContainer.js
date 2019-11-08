import React from 'react';
import {
  CommonLoading,
  WaveLoading,
  BlockLoading,
  BoxLoading,
  CircleLoading,
  LoopCircleLoading,
  TransverseLoading
} from '~/components';
import './style.scss';
const DemoContainer = () => {
  return (
    <div className="demo-container">
      <div className="top-container"></div>
      <div className="logo-area">
        <div>LOADINGG<div></div></div>
        <div><img alt="github" src={require('./github.jpeg')} /></div>
      </div>
      <div className="title-area">
        <h1>THE LOADING COMPONENT BASE ON REACT</h1>
        <p>
          Our goal is to make waiting more interesting。We only focus on loading。Welcome to our
          team。
          <br />
          Completely open source and MIT licensed.
        </p>
      </div>
      <div className="author-area">
        <div>
          <img alt="theme" src={require('./theme.jpeg')} />
          <div>
            <p>Andy&Rabbit</p>
          </div>
        </div>
      </div>
      <div className="component">
        <div className="item">
          <CommonLoading />
        </div>
        <div className="item">
          <WaveLoading />
        </div>
        <div className="item">
          <BlockLoading />
        </div>
        <div className="item">
          <BoxLoading />
        </div>
        <div className="item">
          <CircleLoading />
        </div>
        <div className="item">
          <LoopCircleLoading />
        </div>
        <div className="item">
          <TransverseLoading />
        </div>
        <div className="item">
          <BoxLoading />
        </div>
        <div className="item">
          <CommonLoading />
        </div>
        <div className="item">
          <LoopCircleLoading />
        </div>
        <div className="item">
          <TransverseLoading />
        </div>
        <div className="item">
          <WaveLoading />
        </div>
        <div className="item">
          <CommonLoading />
        </div>
        <div className="item">
          <BlockLoading />
        </div>
      </div>
    </div>
  );
};

export default DemoContainer;
