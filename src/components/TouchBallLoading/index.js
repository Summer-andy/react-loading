import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeItem  } from "../utils/style";
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
  width: ${props => props.size === 'small' ? 50 : (props.size === 'large' ? 68 : 59)}px;
  height:  ${props => props.size === 'small' ? 50 : (props.size === 'large' ? 68 : 59)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: nowrap;
`;

const Item = styled.div`
   width: ${props => sizeItem[props.size] || sizeItem['default']};
  height: ${props => sizeItem[props.size] || sizeItem['default']};
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

const TouchBallLoading = ({ style = commonStyle, color, speed, size }) => {
  return (
    <LoadingContainer style={style} size={size}>
      <ItemLeft color={color} speed={speed} size={size} />
      <Item color={color} size={size} />
      <ItemRight color={color} speed={speed} size={size} />
    </LoadingContainer>
  );
};

export default TouchBallLoading;
