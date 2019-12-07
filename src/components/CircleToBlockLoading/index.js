import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeContainer } from '../utils/style';
const changeSharp = keyframes`
  0% {
    transform: translateX(-50%) rotate(45deg) scale(0);
  }
  50% {
    transform: translateX(125%) rotate(45deg) scale(1);
  }
  100% {
    transform: translateX(300%) rotate(45deg) scale(0);
  }
`;

const LoadContainer = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
`;

const Item = styled.div`
    height: ${props => sizeContainer[props.size] || sizeContainer['default']};
    width: ${props => sizeContainer[props.size] || sizeContainer['default']};
    background-color:  ${props => props.color || '#00adb5' };
    position: absolute;
    margin: auto;
    border-radius: 2px;
    transform: translateY(0) rotate(45deg) scale(0);
    animation: ${changeSharp} ${props => props.speed || 3}s linear infinite;
`

const ItemFirst = styled(Item)`
 animation-delay:  calc(${props => props.speed || 3}s * 2 / -1.5);
`

const ItemTwo = styled(Item)`
 animation-delay:  calc(${props => props.speed || 3}s * 3 / -1.5);
`

const ItemThree = styled(Item)`
 animation-delay:  calc(${props => props.speed || 3}s * 4 / -1.5);
`

const CircleToBlockLoading = ({ style = commonStyle, color, size="default", speed }) => {
  return (
    <LoadContainer style={style}>
      <ItemFirst color={color} size={size} speed={speed} />
      <ItemTwo color={color}  size={size}  speed={speed} />
      <ItemThree color={color} size={size}  speed={speed}  />
    </LoadContainer>
  );
};

export default CircleToBlockLoading;
