import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeItem } from '../utils/style';
const animate = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const LoadingContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: nowrap;
`;

const Item = styled.div`
  width: ${props => sizeItem[props.size]  || sizeItem['default']};
  height: ${props => sizeItem[props.size] || sizeItem['default']};
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

const Disappearedloading = ({ style = commonStyle, color, speed, size="default" }) => {
  return (
    <LoadingContainer style={style}>
      <ItemFirst color={color} speed={speed} size={size} />
      <ItemTwo color={color} speed={speed}  size={size} />
      <Item color={color} speed={speed}  size={size} />
    </LoadingContainer>
  );
};

export default Disappearedloading;
