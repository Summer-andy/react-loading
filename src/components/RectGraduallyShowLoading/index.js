import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle } from '../utils/style';

const gradualShowDispear = keyframes`
  0% {
    opacity: 0.3;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  65% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
`;

const gradualDispear = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%)
  }
`;

const LoadContainer = styled.div`
  width: ${props => props.size === 'small' ? 56 : (props.size === 'large' ? 64 : 60)}px;
  height: ${props => props.size === 'small' ? 12 : (props.size === 'large' ? 20 : 16)}px;
  position: relative;
  overflow: hidden;
`;

const RectBig = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.color || '#00adb5'};
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  animation: ${gradualDispear} ${props => props.speed || 4}s linear infinite;
`

const RectSmallWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  >div {
    animation: ${gradualShowDispear} ${props => props.speed || 4}s ease-in-out infinite;
  }
  >div:nth-of-type(8) {
    animation-delay: 0s;
  }
  >div:nth-of-type(7) {
    animation-delay: ${props => props.speed/16*1 || 4/16*1}s;
  }
  >div:nth-of-type(6) {
    animation-delay: ${props => props.speed/16*2 || 4/16*2}s;
  }
  >div:nth-of-type(5) {
    animation-delay: ${props => props.speed/16*3 || 4/16*3}s;
  }
  >div:nth-of-type(4) {
    animation-delay: ${props => props.speed/16*4 || 4/16*4}s;
  }
  >div:nth-of-type(3) {
    animation-delay: ${props => props.speed/16*5 || 4/16*5}s;
  }
  >div:nth-of-type(2) {
    animation-delay: ${props => props.speed/16*6 || 4/16*6}s;
  }
  >div:nth-of-type(1) {
    animation-delay: ${props => props.speed/16*7 || 4/16*7}s;
  }
`

const RectSmall = styled.div`
  width: 12.5%;
  height: 100%;
  background-color: ${props => props.color || '#00adb5'};
`

const RectGraduallyShowLoading = ({ style = commonStyle, color, speed, size = 'default'}) => {
  return (
    <LoadContainer style={style} speed={speed} color={color} size={size}>
      {/* <RectBig speed={speed} color={color} size={size} /> */}
      <RectSmallWrap>
        {
          Array.from(Array(8)).map((item, index) => <RectSmall speed={speed} color={color} size={size} key={index}/>)
        }
      </RectSmallWrap>
    </LoadContainer>
  );
};

export default RectGraduallyShowLoading;
