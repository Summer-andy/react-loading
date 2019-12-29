import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeItem } from '../utils/style';

const load = keyframes`
 0% {
 top: 19px;
 left: 19px;
}
 100% {
}
`;

const Container = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 75px;
  display: inline-block;
  vertical-align: middle;
`;

const ItemDiv = styled.div`
  position: absolute;
  animation: ${load} ${props => props.speed || 1}s ease alternate infinite;
  transform: scale(0.2);
  &::before {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: ${props => props.color || '#00adb5'} ;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  &::after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background:${props => props.color || '#00adb5'} ;
    border-radius: 50px 50px 0 0;
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

const ItemFirst = styled(ItemDiv)`
  top: 0;
  left: 30px;
`;

const ItemTwo = styled(ItemDiv)`
  left: 60px;
  top: 30px;
`;

const ItemThree = styled(ItemDiv)`
  top: 60px;
  left: 30px;
`;

const ItemFour = styled(ItemDiv)`
  left: 0;
  top: 30px;
`;

const DiamonLoading = ({ style = commonStyle, speed, color }) => {
  return (
    <Container {...{ style, speed, color }}>
      <ItemFirst color={color} speed={speed}></ItemFirst>
      <ItemTwo color={color} speed={speed} />
      <ItemThree color={color} speed={speed} />
      <ItemFour color={color} speed={speed} />
    </Container>
  );
};

export default DiamonLoading;
