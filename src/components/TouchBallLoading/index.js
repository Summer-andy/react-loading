import React from 'react';
import styled, { keyframes } from 'styled-components';

const leftAnimate = keyframes`
  50%,
  100% {
    transform: translateX(95%);
  }
`

const rightAnimate = keyframes`
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
`

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
`;

const ItemLeft = styled(Item)`
  transform: translateX(-100%);
  animation: ${leftAnimate} ${props => props.speed || 1}s ease-in alternate infinite ;
`

const ItemRight = styled(Item)`
  transform: translateX(-95%);
  animation: ${rightAnimate} ${props => props.speed || 1}s ease-out alternate infinite ;
`

const TouchBallLoading = ({ style, color, speed }) => {
  return (
    <LoadingContainer style={style}>
      <ItemLeft color={color} speed={speed} />
      <Item color={color} />
      <ItemRight color={color} speed={speed} />
    </LoadingContainer>
  );
};

export default TouchBallLoading;
