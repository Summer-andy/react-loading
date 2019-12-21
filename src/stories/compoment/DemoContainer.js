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
  SemipolarLoading,
  SolarSystemLoading,
  LadderLoading,
  HeartBoomLoading,
  RollBoxLoading,
  RectGraduallyShowLoading,
  PointSpreadLoading,
  ThreeHorseLoading,
  PassThrouthLoading,
  BatteryLoading,
  CoffeeLoading
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
  const color = '#00adb5';

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
          <CommonLoading  speed={2} color={color}/>
        </div>
        <div className="item"  onClick={() => setName('NineCellLoading')}>
          <NineCellLoading  speed={1.5} color={color} size="small"/>
        </div>
        <div className="item"  onClick={() => setName('BlockLoading')}>
          <BlockLoading  color={color}/>
        </div>
        <div className="item"  onClick={() => setName('BabelLoading')}>
          <BabelLoading  speed={3} color={color}/>
        </div>
        <div className="item"  onClick={() => setName('CircleToBlockLoading')}>
          <CircleToBlockLoading speed={3} color={color}/>
        </div>
        <div className="item"  onClick={() => setName('LoopCircleLoading')}>
          <LoopCircleLoading  color={color}/>
        </div>
        <div className="item"  onClick={() => setName('WindMillLoading')}>
          <WindMillLoading  color={color}/>
        </div>
        <div className="item"  onClick={() => setName('BoxLoading')}>
          <BoxLoading speed={0.7}  color={color}/>
        </div>
        <div className="item"  onClick={() => setName('DisappearedLoading')}>
          <DisappearedLoading  color={color}/>
        </div>
        <div className="item"  onClick={() => setName('TouchBallLoading')}>
          <TouchBallLoading  color={color}/>
        </div>
        <div className="item"  onClick={() => setName('TransverseLoading')}>
          <TransverseLoading style={{ ...style }} color={color}/>
        </div>
        <div className="item"  onClick={() => setName('WaveLoading')}>
          <WaveLoading  color={color}/>
        </div>
        <div className="item"  onClick={() => setName('WaveTopBottomLoading')}>
          <WaveTopBottomLoading  color={color}/>
        </div>
        <div className="item"  onClick={() => setName('CircleLoading')}>
          <CircleLoading  inColor="#090a1e" speed={2} color={color}/>
        </div>
        <div className="item"  onClick={() => setName('BlockReserveLoading')}>
          <BlockReserveLoading  speed={2} color={color}/>
        </div>
        <div className="item"  onClick={() => setName('JumpCircleLoading')}>
          <JumpCircleLoading style={style} speed={0.5} color={color} size="default"/>
        </div>
        <div className="item"  onClick={() => setName('MeteorRainLoading')}>
          <MeteorRainLoading style={style} speed={3} color={color} size="default"/>
        </div>
        <div className="item"  onClick={() => setName('RotateCircleLoading')}>
          <RotateCircleLoading style={style} speed={2} color={color} size="default"/>
        </div>
        <div className="item"  onClick={() => setName('StickyBallLoading')}>
          <StickyBallLoading style={style} speed={3} color={color} size="default"/>
        </div>
        <div className="item"  onClick={() => setName('SemipolarLoading')}>
          <SemipolarLoading style={style} speed={2} color={color} size="default"/>
        </div>
        <div className="item"  onClick={() => setName('SolarSystemLoading')}>
          <SolarSystemLoading style={style} speed={2} color={color} size="default"/>
        </div>
        <div className="item"  onClick={() => setName('LadderLoading')}>
          <LadderLoading style={style} speed={4} color={color} size="default"/>
        </div>
        <div className="item"  onClick={() => setName('HeartBoomLoading')}>
          <HeartBoomLoading style={style} speed={2} color={color} size="default"/>
        </div>
        <div className="item"  onClick={() => setName('RollBoxLoading')}>
          <RollBoxLoading style={style} speed={2} color={color} size="default"/>
        </div>
        <div className="item"  onClick={() => setName('RectGraduallyShowLoading')}>
          <RectGraduallyShowLoading style={style} speed={2} color={color} size="default"/>
        </div>

        <div className="item"  onClick={() => setName('PointSpreadLoading')}>
          <PointSpreadLoading  speed={2} color={color} size="default"/>
        </div>
        <div className="item"  onClick={() => setName('ThreeHorseLoading')}>
          <ThreeHorseLoading  speed={2} color={color} size="small"/>
        </div>
        <div className="item"  onClick={() => setName('PassThrouthLoading')}>
          <PassThrouthLoading  speed={2} color={color} size="default"/>
        </div>
        <div className="item"  onClick={() => setName('ThreeHorseLoading')}>
          <BatteryLoading  speed={2} color={color} size="small"/>
        </div>
        <div className="item"  onClick={() => setName('PassThrouthLoading')}>
          <CoffeeLoading  speed={2} color={color} size="small"/>
        </div>
      </div>
    </div>
  );
};

export default DemoContainer;
