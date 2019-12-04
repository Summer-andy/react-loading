import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle } from '../utils/style';
const bouncedelay = keyframes`
  0% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const LoadingContainer = styled.div`
  height: 0;
  width: 4px;
  border-width: 0 4px 60px 4px;
  border-style: none solid solid;
  border-color: transparent transparent ${props => props.color || '#00adb5'};
  position: relative;
  padding-top: 25px;
`;

const ItemFirst = styled.div`
  height: 0;
  width: 2px;
  border-width: 40px 2px 0px 2px;
  border-style: solid solid none;
  border-color: ${props => props.color || '#00adb5'} transparent transparent;
  transform-origin: 0 -2px;
  transform: rotate(60deg);
  position: absolute;
`;

const ItemSecord = styled.div`
  height: 0;
  width: 2px;
  border-width: 40px 2px 0px 2px;
  border-style: solid solid none;
  border-color: ${props => props.color || '#00adb5'} transparent transparent;
  transform-origin: 2px -1px;
  transform: rotate(180deg);
  position: absolute;
`;

const ItemThree = styled.div`
  height: 0;
  width: 2px;
  border-width: 40px 2px 0px 2px;
  border-style: solid solid none;
  border-color: ${props => props.color || '#00adb5'} transparent transparent;
  transform-origin: 5px 0;
  transform: rotate(300deg);
  position: absolute;
`;

const Center = styled.div`
  width: 4px;
  height: 4px;
  border: 3px ${props => props.color || '#00adb5'} solid;
  background: #fff;
  border-radius: 5px;
  transform: translateX(-3px) translateY(-4px);
  position:absolute;
`;

const Con = styled.div`
  position: relative;
  animation: ${bouncedelay} ${props => props.speed || 5}s infinite linear;
`;

const WindMillLoading = ({ style = commonStyle, color, speed }) => {
  return (
    <LoadingContainer style={style} color={color}>
      <Center color={color} />
      <Con speed={speed}>
        <ItemFirst color={color} />
        <ItemSecord color={color} />
        <ItemThree color={color} />
      </Con>
    </LoadingContainer>
  );
};

export default WindMillLoading;
