import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;


const LoadContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  /* overflow: hidden; */
`;

const Sun = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${props => props.color || '#00adb5'};
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -2px;
  margin-top: -2px;
`

const FirstTrack = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid;
  border-color: ${props => props.color || '#00adb5'};
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -15px;
  margin-top: -15px;
  box-sizing: border-box;
  animation: ${rotate} ${props => props.speed || 2}s linear infinite;
`

const Earth = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${props => props.color || '#00adb5'};
  position: absolute;
  left: -1px;
  top: 2px;
`

const SecondTrack = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid;
  border-color: ${props => props.color || '#00adb5'};
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -30px;
  margin-top: -30px;
  box-sizing: border-box;
  animation: ${rotate} ${props => props.speed * 1.5 || 3}s linear infinite;
`

const Mars = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.color || '#00adb5'};
  position: absolute;
  left: 7px;
  top: 2px;
`

const SolarSystemLoading = ({ style, color, speed }) => {
  return (
    <LoadContainer style={style}>
      <Sun color={color}/>
      <FirstTrack color={color} speed={speed}>
        <Earth color={color}/>
      </FirstTrack>
      <SecondTrack color={color} speed={speed}>
        <Mars color={color}/>
      </SecondTrack>
    </LoadContainer>
  );
};

export default SolarSystemLoading;
