import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle } from '../utils/style';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;


const LoadContainer = styled.div`
  width: ${props => props.size === 'small' ? 44 : (props.size === 'large' ? 56 : 50)}px;
  height: ${props => props.size === 'small' ? 44 : (props.size === 'large' ? 56 : 50)}px;
  position: relative;
  /* overflow: hidden; */
`;

const Sun = styled.div`
  width: ${props => props.size === 'small' ? 2 : (props.size === 'large' ? 6 : 4)}px;;
  height: ${props => props.size === 'small' ? 2 : (props.size === 'large' ? 6 : 4)}px;;
  border-radius: 100%;
  background-color: ${props => props.color || '#00adb5'};
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: ${props => props.size === 'small' ? -1 : (props.size === 'large' ? -3 : -2)}px;
  margin-top: ${props => props.size === 'small' ? -1 : (props.size === 'large' ? -3 : -2)}px;
`

const FirstTrack = styled.div`
  width: ${props => props.size === 'small' ? 24 : (props.size === 'large' ? 36 : 30)}px;
  height: ${props => props.size === 'small' ? 24 : (props.size === 'large' ? 36 : 30)}px;
  border-radius: 100%;
  border: 1px solid;
  border-color: ${props => props.color || '#00adb5'};
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: ${props => props.size === 'small' ? -12 : (props.size === 'large' ? -18 : -15)}px;
  margin-top: ${props => props.size === 'small' ? -12 : (props.size === 'large' ? -18 : -15)}px;
  box-sizing: border-box;
  animation: ${rotate} ${props => props.speed || 2}s linear infinite;
`

const Earth = styled.div`
  width: ${props => props.size === 'small' ? 4 : (props.size === 'large' ? 8 : 6)}px;
  height: ${props => props.size === 'small' ? 4 : (props.size === 'large' ? 8 : 6)}px;
  border-radius: 100%;
  background-color: ${props => props.color || '#00adb5'};
  position: absolute;
  left: ${props => props.size === 'small' ? 1 : (props.size === 'large' ? 1 : 0)}px;
  top: ${props => props.size === 'small' ? 1 : (props.size === 'large' ? 3 : 2)}px;
`

const SecondTrack = styled.div`
  width: ${props => props.size === 'small' ? 54 : (props.size === 'large' ? 66 : 60)}px;
  height: ${props => props.size === 'small' ? 54 : (props.size === 'large' ? 66 : 60)}px;
  border-radius: 100%;
  border: 1px solid;
  border-color: ${props => props.color || '#00adb5'};
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: ${props => props.size === 'small' ? -27 : (props.size === 'large' ? -33 : -30)}px;
  margin-top: ${props => props.size === 'small' ? -27 : (props.size === 'large' ? -33 : -30)}px;
  box-sizing: border-box;
  animation: ${rotate} ${props => props.speed * 1.5 || 3}s linear infinite;
`

const Mars = styled.div`
  width: ${props => props.size === 'small' ? 6 : (props.size === 'large' ? 10 : 8)}px;
  height: ${props => props.size === 'small' ? 6 : (props.size === 'large' ? 10 : 8)}px;
  border-radius: 100%;
  background-color: ${props => props.color || '#00adb5'};
  position: absolute;
  left: ${props => props.size === 'small' ? 6 : (props.size === 'large' ? 8 : 7)}px;
  top: ${props => props.size === 'small' ? 1 : (props.size === 'large' ? 3 : 2)}px;
`

const SolarSystemLoading = ({ style = commonStyle, color, speed, size = 'default' }) => {
  return (
    <LoadContainer style={style} size={size}>
      <Sun color={color} size={size}/>
      <FirstTrack color={color} speed={speed} size={size}>
        <Earth color={color} size={size}/>
      </FirstTrack>
      <SecondTrack color={color} speed={speed} size={size}>
        <Mars color={color} size={size}/>
      </SecondTrack>
    </LoadContainer>
  );
};

export default SolarSystemLoading;
