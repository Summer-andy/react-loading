import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  50% {
    transform: rotate(360deg) scale(0.7);
  }
`;


const LoadContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  /* overflow: hidden; */
  > div:nth-child(1) {
    height: calc(50px - 50px * 0.2 * 0);
    width: calc(50px - 50px * 0.2 * 0);
    top: calc(50px * 0.1 * 0);
    left: calc(50px * 0.1 * 0);
    animation: ${rotate} ${props => props.speed || 2}s infinite;
    animation-delay: calc(${props => props.speed || 2}s * 0.1 * 4);
    z-index: 5;
  }
  > div:nth-child(2) {
    height: calc(50px - 50px * 0.2 * 1);
    width: calc(50px - 50px * 0.2 * 1);
    top: calc(50px * 0.1 * 1);
    left: calc(50px * 0.1 * 1);
    animation: ${rotate} ${props => props.speed || 2}s infinite;
    animation-delay: calc(${props => props.speed || 2}s * 0.1 * 3);
    z-index: 4;
  }
  > div:nth-child(3) {
    height: calc(50px - 50px * 0.2 * 2);
    width: calc(50px - 50px * 0.2 * 2);
    top: calc(50px * 0.1 * 2);
    left: calc(50px * 0.1 * 2);
    animation: ${rotate} ${props => props.speed || 2}s infinite;
    animation-delay: calc(${props => props.speed || 2}s * 0.1 * 2);
    z-index: 3;
  }
  > div:nth-child(4) {
    height: calc(50px - 50px * 0.2 * 3);
    width: calc(50px - 50px * 0.2 * 3);
    top: calc(50px * 0.1 * 3);
    left: calc(50px * 0.1 * 3);
    animation: ${rotate} ${props => props.speed || 2}s infinite;
    animation-delay: calc(${props => props.speed || 2}s * 0.1 * 1);
    z-index: 2;
  }
  > div:nth-child(5) {
    height: calc(50px - 50px * 0.2 * 4);
    width: calc(50px - 50px * 0.2 * 4);
    top: calc(50px * 0.1 * 4);
    left: calc(50px * 0.1 * 4);
    animation: ${rotate} ${props => props.speed || 2}s infinite;
    animation-delay: calc(${props => props.speed || 2}s * 0.1 * 0);
    z-index: 1;
  }
`;

const HalfCircle = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  border: calc(50px * 0.05) solid transparent;
  border-top-color: ${props => props.color || '#00adb5'};
  border-left-color: ${props => props.color || '#00adb5'};
`

const SemipolarLoading = ({ style, color, speed }) => {
  return (
    <LoadContainer style={style}>
      {
        Array.from(Array(5)).map((item, index) => <HalfCircle color={color} speed={speed} key={index}/>)
      }
    </LoadContainer>
  );
};

export default SemipolarLoading;
