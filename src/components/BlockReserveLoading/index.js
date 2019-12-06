import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeContainer } from '../utils/style';
const animate = keyframes`
  50% {
    transform: rotateY(-180deg);
  }
  100% {
    transform: rotateY(-180deg) rotateX(-180deg);
  }
`;

const LoadingContainer = styled.div`
  perspective: 120px;
  width: 120px;
  height: 120px;
  position: relative;
`;

const Item = styled.div`
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: ${props => sizeContainer[props.size] || sizeContainer['default']};
  height: ${props => sizeContainer[props.size] || sizeContainer['default']};
  transform: rotate(0);
  background: ${props => props.color || '#00adb5'};
  animation: ${animate} ${props => props.speed || 1}s infinite;
`;

const BlockReserveLoading = ({ style = commonStyle, color, speed, size="default" }) => {
  return (
    <LoadingContainer style={style}>
      <Item color={color} speed={speed} size={size} />
    </LoadingContainer>
  );
};

export default BlockReserveLoading;
