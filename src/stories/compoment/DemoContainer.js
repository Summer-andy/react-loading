import React from 'react';
import {
  CommonLoading,
  WaveLoading,
  BlockLoading,
  BoxLoading,
  LoopCircleLoading,
  TransverseLoading,
  CircleToBlockLoading
} from '~/components';
import './style.scss';
const DemoContainer = () => {
  return (
    <div className="demo-container">
      <div className="top-container"></div>
      <div className="logo-area">
        <div>LOADINGG<div></div></div>
        <div><a target="_blank" href="https://github.com/sixiaodong123/react-loading"><img alt="github" src={require('./github.jpeg')} /></a></div>
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
          <WaveLoading style={{ margin: '28px auto' }} />
        </div>
        <div className="item">
          <BlockLoading />
        </div>
        <div className="item">
          <BoxLoading style={{ margin: '25px auto' }} />
        </div>
        <div className="item">
          <CircleToBlockLoading />
        </div>
        <div className="item">
          <LoopCircleLoading />
        </div>
        <div className="item">
          <TransverseLoading />
        </div>
        <div className="item">
          <BoxLoading style={{ margin: '25px auto' }} />
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
          <WaveLoading style={{ margin: '28px auto' }}  />
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
