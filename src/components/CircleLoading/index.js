import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle } from '../utils/style';

const animate = keyframes`
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoadingContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(0, 169, 178, 0.2);
  &::before {
    content: '';
    width: 70px;
    height: 70px;
    background-color: ${props => props.color || '#00adb5'};
    position: absolute;
    left: 50%;
    bottom: 50%;
    z-index: 1;
    transform-origin: left bottom;
    animation: ${animate} ${props => props.speed || 1}s infinite linear;
  }
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color:  ${props => props.inColor || '#fff'};
    z-index: 2;
    border-radius: 50%;
  }
`;

const CircleLoading = ({ style = commonStyle, color, inColor, speed }) => {
  return (
    <LoadingContainer style={style} color={color} inColor={inColor} speed={speed} />
  );
};

export default CircleLoading;
