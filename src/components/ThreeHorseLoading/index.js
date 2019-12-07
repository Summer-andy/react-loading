import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle } from '../utils/style';
const animation = keyframes`
    0%   {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
  height: 150px;
  width: 150px;
  overflow: hidden;
  animation-delay: 1s;
`;

const Item = styled.div`
    width:  ${props => props.size === 'small' ? 50 : (props.size === 'large' ? 150 : 100)}px;
    height: ${props => props.size === 'small' ? 50 : (props.size === 'large' ? 150 : 100)}px;
    margin: ${props => props.size === 'small' ? -20 : (props.size === 'large' ? -75 : -50)}px 0 0 ${props => props.size === 'small' ? -20 : (props.size === 'large' ? -75 : -50)}px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: ${props => props.color || '#00adb5'};
    animation: ${animation} ${props => props.speed / 2 || 1.5}s linear infinite;
  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: ${props => props.color || '#00adb5'};
    animation: ${animation}  ${props => props.speed || 3}s linear infinite;
  }
  &:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: ${props => props.color || '#00adb5'};
    animation: ${animation}  ${props => props.speed / 3 || 1}s linear infinite;
  }
`;
const ThreeHorseLoading = ({ speed, color, size="default", style = commonStyle }) => {
  return (
    <Container style={style} size={size}>
      <Item speed={speed} size={size} style={style} color={color} />
    </Container>
  );
};

export default ThreeHorseLoading;
