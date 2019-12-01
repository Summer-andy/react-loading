import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const opacityChange = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.3;
  }
`

const LoadContainer = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  overflow: hidden;
  animation: ${rotate} ${props => props.speed || 2.4 }s linear infinite;
  > div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    background-color: ${props => props.color || '#00adb5' };
    animation: ${opacityChange} ${props => props.speed || 2.4 }s linear infinite alternate;
  }
  > div:nth-of-type(1) {
    animation-delay: 0s;
  }
  > div:nth-of-type(2) {
    animation-delay: ${props => props.speed/3 || 0.8}s;
  }
  > div:nth-of-type(3) {
    animation-delay: ${props => props.speed/3 * 2 || 1.6}s;
  }
  > div:nth-of-type(4) {
    animation-delay: ${props => props.speed/3 * 3 || 2.4}s;
  }
`;

const CircleOne = styled.div`
  left: 0;
  top: 0;
  animation-delay: 0s;
`

const CircleTwo = styled.div`
  right: 0;
  top: 0;
`

const CircleThree = styled.div`
  left: 0;
  bottom: 0;
`

const CircleFour = styled.div`
  right: 0;
  bottom: 0;
`

const RotateCircleLoading = ({ style, color, speed }) => {
  return (
    <LoadContainer style={style} speed={speed}>
      <CircleOne color={color} speed={speed} />
      <CircleTwo color={color} speed={speed} />
      <CircleThree color={color} speed={speed} />
      <CircleFour color={color} speed={speed} />
    </LoadContainer>
  );
};

export default RotateCircleLoading;
