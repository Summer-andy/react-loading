import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
`;

const Item = styled.div`
    height: 20px;
    width: 20px;
    background-color: #00adb5;
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

const CircleToBlockLoading = ({ style }) => {
  return (
    <LoadContainer style={style}>
      <ItemFirst />
      <ItemTwo />
      <ItemThree />
    </LoadContainer>
  );
};

export default CircleToBlockLoading;
