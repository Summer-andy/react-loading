import React from 'react';
import styled, { keyframes } from 'styled-components';

const rollOne = keyframes`
  0%,
  20% {
    transform: rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: rotate(180deg);
    opacity: 1;
  }
  60%,
  70% {
    transform: rotate(180deg);
    opacity: 0;
  }
  100% {
    transform: rotate(180deg);
    opacity: 0;
  }
`;

const rollTwo = keyframes`
  0%,
  50% {
    transform: rotate(0deg) translateX(0);
    opacity: 0;
  }
  51% {
    transform: rotate(0deg) translateX(0);
    opacity: 1;
  }
  70% {
    transform: rotate(0deg) translateX(-100%);
    opacity: 1;
  }
  90% {
    transform: rotate(180deg) translateX(-100%);
    opacity: 1;
  }
  100% {
    transform: rotate(180deg) translateX(-100%);
    opacity: 1;
  }
`;

const moveLeft = keyframes`
  0%,
  51% {
    transform: translateX(0);
  }
  70% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-100%);
  }
`


const LoadContainer = styled.div`
  width: ${props => props.size === 'small' ? 24 : (props.size === 'large' ? 36 : 30)}px;
  height: ${props => props.size === 'small' ? 24 : (props.size === 'large' ? 36 : 30)}px;
  position: relative;
  /* overflow: hidden; */
`;

const RollBoxOne = styled.div`
  width: ${props => props.size === 'small' ? 10 : (props.size === 'large' ? 14 : 12)}px;
  height: ${props => props.size === 'small' ? 10 : (props.size === 'large' ? 14 : 12)}px;
  background-color: ${props => props.color || '#00adb5'};
  animation: ${rollOne} ${props => props.speed || 3}s ease infinite;
  position: absolute;
  left: 0;
  bottom: 0;
  transform-origin: right top;
`

const RollBoxTwo = styled.div`
  width: ${props => props.size === 'small' ? 10 : (props.size === 'large' ? 14 : 12)}px;
  height: ${props => props.size === 'small' ? 10 : (props.size === 'large' ? 14 : 12)}px;
  background-color: ${props => props.color || '#00adb5'};
  animation: ${rollTwo} ${props => props.speed || 3}s ease infinite;
  position: absolute;
  left: ${props => props.size === 'small' ? 10 : (props.size === 'large' ? 14 : 12)}px;
  bottom: ${props => props.size === 'small' ? 10 : (props.size === 'large' ? 14 : 12)}px;
  transform-origin: left bottom;
`

const RollBoxMove = styled.div`
  width: ${props => props.size === 'small' ? 10 : (props.size === 'large' ? 14 : 12)}px;
  height: ${props => props.size === 'small' ? 10 : (props.size === 'large' ? 14 : 12)}px;
  background-color: ${props => props.color || '#00adb5'};
  animation: ${moveLeft} ${props => props.speed || 3}s ease infinite;
  position: absolute;
  left: ${props => props.size === 'small' ? 10 : (props.size === 'large' ? 14 : 12)}px;
  bottom: 0;
`

const RollBoxLoading = ({ style, color, speed, size }) => {
  return (
    <LoadContainer style={style} size={size}>
      <RollBoxOne size={size} color={color} speed={speed}/>
      <RollBoxTwo size={size} color={color} speed={speed}/>
      <RollBoxMove size={size} color={color} speed={speed}/>
    </LoadContainer>
  );
};

export default RollBoxLoading;
