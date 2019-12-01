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
  width: 24px;
  height: 24px;
  border-radius: 100%;
  position: relative;
  z-index: 1;
  background-color: ${props => props.color || '#00adb5' };
  animation: ${fly} ${props => props.speed || 2}s 0s infinite;
`

const BallTwo = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  position: relative;
  background-color: ${props => props.color || '#f9c094' };
  animation: ${fly} ${props => props.speed || 2}s -${props => props.speed/2 || 1}s infinite;
`

const StickyBallLoading = ({ style, color, speed }) => {
  return (
    <LoadContainer style={style}>
      <BlurField>
        <BallOne color={color} speed={speed}/>
        <BallTwo color={color} speed={speed}/>
      </BlurField>
    </LoadContainer>
  );
};

export default StickyBallLoading;
