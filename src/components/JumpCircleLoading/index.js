import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: translateY(0);
    width: 22px;
    height: 14px;
  }
  30% {
    width: 18px;
    height: 18px;
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
`;

const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  bottom: 4px;
  left: 16px;
  background-color: ${props => props.color || '#00adb5' };
  animation: ${bounce} ${props => props.speed || 0.5}s ease-out infinite alternate;
`;

const BottomReac = styled.div`
  width: 28px;
  height: 4px;
  position: absolute;
  bottom: 0px;
  left: 11px;
  background-color: ${props => props.color || '#00adb5' };
`


const JumpCircleLoading = ({ style, color, speed }) => {
  return (
    <LoadContainer style={style}>
      <Circle color={color} speed={speed}/>
      <BottomReac color={color}/>
    </LoadContainer>
  );
};

export default JumpCircleLoading;
