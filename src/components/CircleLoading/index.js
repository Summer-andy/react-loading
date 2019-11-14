import React from 'react';
import styled, { keyframes } from 'styled-components';


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
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(0, 169, 178, 0.2);
  &::before {
    content: '';
    width: 70px;
    height: 70px;
    background-color: #00adb5;
    position: absolute;
    left: 50%;
    bottom: 50%;
    z-index: 1;
    transform-origin: left bottom;
    animation: ${animate} 1.5s infinite linear;
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
    background-color: #fff;
    z-index: 2;
    border-radius: 50%;
  }
`;

const CircleLoading = ({ style }) => {
  return (
    <LoadingContainer style={style} />
  );
};

export default CircleLoading;
