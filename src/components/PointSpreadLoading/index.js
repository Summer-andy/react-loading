import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeItem } from '../utils/style';
const animation = keyframes`
  0% {
    transform: scale(1);
  }
  50%,
    75% {
    transform: scale(2.5);
  }
  78%, 100% {
    opacity: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  overflow: hidden;
  animation-delay: 1s;
`;

const Item = styled.div`
  width: ${props => sizeItem[props.size] || sizeItem['default']};
  height: ${props => sizeItem[props.size] || sizeItem['default']};
  border-radius: 50%;
  background-color: ${props => props.color || '#00adb5'};
  margin:  7px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    width: ${props => sizeItem[props.size] || sizeItem['default']};
    height: ${props => sizeItem[props.size] || sizeItem['default']};
    border-radius: 50%;
    background-color:  ${props => props.color || '#00adb5'};
    opacity: 0.7;
    animation: ${animation} 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: ${props => props.delay}ms;
    transition: 0.5s all ease;
    transform: scale(1);
  }
`;

const PointSpreadLoading = ({ speed, color, style = commonStyle, size = 'default' }) => {
  return (
    <Container style={style}>
      <Item delay="250" speed={speed} color={color} size={size}></Item>
      <Item delay="500" speed={speed} color={color} size={size}></Item>
      <Item delay="750" speed={speed} color={color} size={size}></Item>
      <Item delay="1000" speed={speed} color={color} size={size}></Item>
    </Container>
  );
};

export default PointSpreadLoading;
