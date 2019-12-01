import React, { useState, useEffect } from 'react';
import {
  CommonLoading,
  WaveLoading,
  BlockLoading,
  BoxLoading,
  LoopCircleLoading,
  TransverseLoading,
  CircleToBlockLoading,
  DisappearedLoading,
  TouchBallLoading,
  BlockReserveLoading,
  WaveTopBottomLoading,
  CircleLoading,
  NineCellLoading,
  WindMillLoading,
  BabelLoading,
  JumpCircleLoading,
  MeteorRainLoading,
  RotateCircleLoading,
  StickyBallLoading,
  SemipolarLoading
} from '~/components';
import './style.scss';
const DemoContainer = () => {

  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('CommonLoading');
  const style = {
    margin: 'auto',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };
  const c = "import React from 'react';";
  const a = `import { ${name}  } from 'react-loadingg';`;
  const b = `const Container = () => <${name} />;`;
  const d = 'export default Container;';

  useEffect(() => {
    document.getElementsByClassName('component')[0].addEventListener('click', () => {
      setVisible(false);
      setTimeout(() => {
        setVisible(true);
      }, 150);
    });
  }, []);

  return (
    <div className="demo-container">
      <div className="top-container"></div>
      <div className="modal" style={{  display: visible ? "block": 'none' }}>
        <div className="container" >
          <b>JSX</b>
          <b onClick={() => setVisible(false)}>close</b>
          <div className="codeContainer">
            <div>{c}</div>
            <div>{a}</div>
            <div>{b}</div>
            <div>{d}</div>
          </div>
        </div>
      </div>

      <div className="logo-area">
        <div>
          LOADINGG<div></div>
        </div>
        <div>
          <a target="_blank" href="http://139.196.82.33:8080/">
            <img src={require('./logo.jpeg')} alt="logo" />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://github.com/sixiaodong123/react-loading">
            <img alt="github" src={require('./github.jpeg')} />
          </a>
        </div>
      </div>
      <div className="title-area">
        <h1>THE LOADING COMPONENT BASE ON REACT</h1>
        <p>
          Our goal is to make waiting more interesting.We only focus on loading.Welcome to our team.
          <br />
          Completely open source and MIT licensed.
        </p>
      </div>
      <div className="component">
        <div className="item" onClick={() => setName('CommonLoading')}>
          <CommonLoading style={style} speed={1} />
        </div>
        <div className="item"  onClick={() => setName('NineCellLoading')}>
          <NineCellLoading style={style} speed={1.5} />
        </div>
        <div className="item"  onClick={() => setName('BlockLoading')}>
          <BlockLoading style={style} />
        </div>
        <div className="item"  onClick={() => setName('BabelLoading')}>
          <BabelLoading style={style} speed={3} />
        </div>
        <div className="item"  onClick={() => setName('CircleToBlockLoading')}>
          <CircleToBlockLoading style={style} speed={3} />
        </div>
        <div className="item"  onClick={() => setName('LoopCircleLoading')}>
          <LoopCircleLoading style={style} />
        </div>
        <div className="item"  onClick={() => setName('WindMillLoading')}>
          <WindMillLoading style={style} />
        </div>
        <div className="item"  onClick={() => setName('BoxLoading')}>
          <BoxLoading speed={0.7} style={style} />
        </div>
        <div className="item"  onClick={() => setName('DisappearedLoading')}>
          <DisappearedLoading style={style} />
        </div>
        <div className="item"  onClick={() => setName('TouchBallLoading')}>
          <TouchBallLoading style={style} />
        </div>
        <div className="item"  onClick={() => setName('TransverseLoading')}>
          <TransverseLoading style={{ ...style, marginTop: 60 }} />
        </div>
        <div className="item"  onClick={() => setName('WaveLoading')}>
          <WaveLoading style={style} />
        </div>
        <div className="item"  onClick={() => setName('WaveTopBottomLoading')}>
          <WaveTopBottomLoading style={style} />
        </div>
        <div className="item"  onClick={() => setName('CircleLoading')}>
          <CircleLoading style={style} inColor="#090a1e" speed={2} />
        </div>
        <div className="item"  onClick={() => setName('BlockReserveLoading')}>
          <BlockReserveLoading style={style} speed={2} />
        </div>
        <div className="item"  onClick={() => setName('JumpCircleLoading')}>
          <JumpCircleLoading style={style} speed={0.5}/>
        </div>
        <div className="item"  onClick={() => setName('MeteorRainLoading')}>
          <MeteorRainLoading style={style} speed={3}/>
        </div>
        <div className="item"  onClick={() => setName('RotateCircleLoading')}>
          <RotateCircleLoading style={style} speed={2}/>
        </div>
        <div className="item"  onClick={() => setName('StickyBallLoading')}>
          <StickyBallLoading style={style} speed={3}/>
        </div>
        <div className="item"  onClick={() => setName('SemipolarLoading')}>
          <SemipolarLoading style={style} speed={3}/>
        </div>
      </div>
    </div>
  );
};

export default DemoContainer;
