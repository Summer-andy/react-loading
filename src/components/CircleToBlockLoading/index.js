import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle } from '../utils/style';
const changeSharp = keyframes`
  0% {
    transform: translateX(0) rotate(45deg) scale(0);
  }
  50% {
    transform: translateX(250%) rotate(45deg) scale(1);
  }
  100% {
    transform: translateX(500%) rotate(45deg) scale(0);
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
    height: 20px;
    width: 20px;
    background-color:  ${props => props.color || '#00adb5' };
    position: absolute;
    margin: auto;
    border-radius: 2px;
    transform: translateY(0) rotate(45deg) scale(0);
    animation: ${changeSharp} 3s linear infinite;
`

const ItemFirst = styled(Item)`
 animation-delay:  calc(3s * 2 / -1.5);
`

const ItemTwo = styled(Item)`
 animation-delay:  calc(3s * 3 / -1.5);
`

const ItemThree = styled(Item)`
 animation-delay:  calc(3s * 4 / -1.5);
`

const CircleToBlockLoading = ({ style = commonStyle, color }) => {
  return (
    <LoadContainer style={style}>
      <ItemFirst color={color} />
      <ItemTwo color={color}  />
      <ItemThree color={color}  />
    </LoadContainer>
  );
};

export default CircleToBlockLoading;
