import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle } from '../utils/style';
const animate = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
`;

const LoadingContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: nowrap;
`;

const Item = styled.div`
  width: 20%;
  height: 20%;
  border-radius: 50%;
  background: ${props => props.color || '#00adb5'};
  animation: ${animate} ${props => props.speed || 0.8}s ease-in-out alternate infinite;
`;

const ItemFirst = styled(Item)`
  animation-delay: -${props => props.speed / 2 || 0.4}s;
`;

const ItemTwo = styled(Item)`
  animation-delay:  -${props => props.speed / 4 || 0.2}s;
`;

const WaveTopBottomLoading = ({ style = commonStyle, color, speed }) => {
  return (
    <LoadingContainer style={style}>
      <ItemFirst color={color} speed={speed} />
      <ItemTwo color={color} speed={speed} />
      <Item color={color} speed={speed} />
    </LoadingContainer>
  );
};

export default WaveTopBottomLoading;
