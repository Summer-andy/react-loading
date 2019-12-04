import React from 'react';
import styled, { keyframes } from 'styled-components';

const boom = keyframes`
  0% {
    transform: rotate(45deg) scale(1);
  }
  20% {
    transform: rotate(45deg) scale(1.1);
  }
  40% {
    transform: rotate(45deg) scale(1);
  }
  60% {
    transform: rotate(45deg) scale(1.2);
  }
  100% {
    transform: rotate(45deg) scale(1);
  }
`;


const LoadContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
`;

const Heart = styled.div`
  width: ${props => props.size === 'small' ? 22 : (props.size === 'large' ? 30 : 26)}px;
  height: ${props => props.size === 'small' ? 22 : (props.size === 'large' ? 30 : 26)}px;
  background-color: ${props => props.color || '#00adb5'};
  position: relative;
  transform: rotate(45deg);
  animation: ${boom} ${props => props.speed || 2}s ease infinite;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.color || '#00adb5'};
    position: absolute;
    left: -50%;
    bottom: 0;
  }
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.color || '#00adb5'};
    position: absolute;
    top: -50%;
    right: 0;
  }
`

const HeartBoomLoading = ({ style, color, speed, size }) => {
  return (
    <LoadContainer style={style}>
      <Heart color={color} speed={speed} size={size}/>
    </LoadContainer>
  );
};

export default HeartBoomLoading;
