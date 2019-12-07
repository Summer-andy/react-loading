import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeContainer, sizeItem } from '../utils/style';

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
  width: ${props => sizeContainer[props.size] || sizeContainer['default'] };
  height: ${props => sizeContainer[props.size] || sizeContainer['default'] };
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
`;

const Heart = styled.div`
  width: ${props => sizeItem[props.size] || sizeItem[props.size] };
  height: ${props => sizeItem[props.size] || sizeItem[props.size] };
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

const HeartBoomLoading = ({ style = commonStyle, color, speed, size = 'default'}) => {
  return (
    <LoadContainer style={style} size={size}>
      <Heart color={color} speed={speed} size={size}/>
    </LoadContainer>
  );
};

export default HeartBoomLoading;
