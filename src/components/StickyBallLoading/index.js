import React from 'react';
import styled, { keyframes } from 'styled-components';

const fly = keyframes`
  0% {
    transform: translateY(-16px);
  }

  50% {
    transform: translateY(20px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-16px);
  }
`;


const LoadContainer = styled.div`
  width: 50px;
  height: 60px;
  position: relative;
  /* overflow: hidden; */
`;

const BlurField = styled.div`
  width: 50px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const BallOne = styled.div`
  width: ${props => props.size === 'small' ? 18 : (props.size === 'large' ? 30 : 24)}px;
  height: ${props => props.size === 'small' ? 18 : (props.size === 'large' ? 30 : 24)}px;
  border-radius: 100%;
  position: relative;
  z-index: 1;
  background-color: ${props => props.color || '#00adb5' };
  animation: ${fly} ${props => props.speed || 2}s 0s infinite;
`

const BallTwo = styled.div`
  width: ${props => props.size === 'small' ? 18 : (props.size === 'large' ? 30 : 24)}px;
  height: ${props => props.size === 'small' ? 18 : (props.size === 'large' ? 30 : 24)}px;
  border-radius: 100%;
  position: relative;
  background-color: ${props => props.inColor || '#f9c094' };
  animation: ${fly} ${props => props.speed || 2}s -${props => props.speed/2 || 1}s infinite;
`

const StickyBallLoading = ({ style, color, inColor, speed, size }) => {
  return (
    <LoadContainer style={style}>
      <BlurField>
        <BallOne color={color} speed={speed} size={size}/>
        <BallTwo inColor={inColor} speed={speed} size={size}/>
      </BlurField>
    </LoadContainer>
  );
};

export default StickyBallLoading;
