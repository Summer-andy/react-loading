import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: translateY(0) scaleX(1.2) scaleY(0.8);
  }
  25% {
    transform: translateY(-10px) scaleX(1) scaleY(1);
  }
  100% {
    background-color: #f9c094;
    transform: translateY(-40px);
  }
`;

const LoadContainer = styled.div`
  width: 50px;
  height: 64px;
  position: relative;
  overflow: hidden;
  transform: scaleX()
`;

const Circle = styled.div`
  width: ${props => props.size === 'small' ? 12 : (props.size === 'large' ? 20 : 16)}px;
  height: ${props => props.size === 'small' ? 12 : (props.size === 'large' ? 20 : 16)}px;
  border-radius: 50%;
  position: absolute;
  bottom: 4px;
  left: ${props => props.size === 'small' ? 19 : (props.size === 'large' ? 15 : 17)}px;
  background-color: ${props => props.color || '#00adb5' };
  animation: ${bounce} ${props => props.speed || 0.5}s ease-out infinite alternate;
`;

const BottomReac = styled.div`
  width: ${props => props.size === 'small' ? 24 : (props.size === 'large' ? 32 : 28)}px;
  height: 4px;
  position: absolute;
  bottom: 0px;
  left: ${props => props.size === 'small' ? 13 : (props.size === 'large' ? 9 : 11)}px;
  background-color: ${props => props.color || '#00adb5' };
`


const JumpCircleLoading = ({ style, color, speed, size }) => {
  return (
    <LoadContainer style={style}>
      <Circle color={color} speed={speed} size={size}/>
      <BottomReac color={color} size={size}/>
    </LoadContainer>
  );
};

export default JumpCircleLoading;
