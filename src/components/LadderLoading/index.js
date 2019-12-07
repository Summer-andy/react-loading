import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeContainer, sizeItem } from '../utils/style';

const leftLadderMove = keyframes`
  0% {
    transform: translateY(68px);
  }
  10%,
  50% {
    transform: translateY(0);
  }
  60%,
  100% {
    transform: translateY(-68px);
  }
`;

const rightLadderMove = keyframes`
  0%, 
  40% {
    transform: translateY(68px);
  }
  50%,
  90% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-68px);
  }
`;

const RowLadderOneMove = keyframes`
  0%, 
  10% {
    transform: translateY(68px);
  }
  20%,
  60% {
    transform: translateY(0);
  }
  70%,
  100% {
    transform: translateY(-68px);
  }
`;

const RowLadderTwoMove = keyframes`
  0%, 
  20% {
    transform: translateY(68px);
  }
  30%,
  70% {
    transform: translateY(0);
  }
  80%,
  100% {
    transform: translateY(-68px);
  }
`;

const RowLadderThreeMove = keyframes`
  0%, 
  30% {
    transform: translateY(68px);
  }
  40%,
  80% {
    transform: translateY(0);
  }
  90%,
  100% {
    transform: translateY(-68px);
  }
`;

const LoadContainer = styled.div`
  width: ${props => props.size === 'small' ? 16 : (props.size === 'large' ? 24 : 20)}px;
  height: ${props => props.size === 'small' ? 60 : (props.size === 'large' ? 68 : 64)}px;
  position: relative;
  overflow: hidden;
`;

const LeftLadder = styled.div`
  height: 0;
	width: 1px;
	border-bottom: ${props => props.size === 'small' ? 60 : (props.size === 'large' ? 68 : 64)}px solid ${props => props.color || '#00adb5'};
	border-left: 1px solid transparent;
	border-right: 1px solid transparent;
  position: absolute;
  left: 0;
  bottom: 0;
  animation: ${leftLadderMove} ${props => props.speed || 4}s ease infinite;
`;

const RightLadder = styled.div`
  height: 0;
	width: 1px;
	border-bottom: ${props => props.size === 'small' ? 60 : (props.size === 'large' ? 68 : 64)}px solid ${props => props.color || '#00adb5'};
	border-left: 1px solid transparent;
	border-right: 1px solid transparent;
  position: absolute;
  right: 0;
  bottom: 0;
  animation: ${rightLadderMove} ${props => props.speed || 4}s ease infinite;
`;

const RowLadderOne = styled.div`
  height: 1px;
  width: 18px;
  background-color: ${props => props.color || '#00adb5'};
  position: absolute;
  left: 50%;
  margin-left: -9px;
  top: 10px;
  animation: ${RowLadderOneMove} ${props => props.speed || 4}s ease infinite;
`

const RowLadderTwo = styled.div`
  height: 1px;
  width: 18px;
  background-color: ${props => props.color || '#00adb5'};
  position: absolute;
  left: 50%;
  margin-left: -9px;
  top: 30px;
  animation: ${RowLadderTwoMove} ${props => props.speed || 4}s ease infinite;
`

const RowLadderThree = styled.div`
  height: 1px;
  width: 18px;
  background-color: ${props => props.color || '#00adb5'};
  position: absolute;
  left: 50%;
  margin-left: -9px;
  top: 50px;
  animation: ${RowLadderThreeMove} ${props => props.speed || 4}s ease infinite;
`

const LadderLoading = ({ style = commonStyle, color, speed, size = 'default'}) => {
  return (
    <LoadContainer style={style}>
      <LeftLadder color={color} speed={speed} size={size}/>
      <RightLadder color={color} speed={speed} size={size}/>
      <RowLadderOne color={color} speed={speed} size={size}/>
      <RowLadderTwo color={color} speed={speed} size={size}/>
      <RowLadderThree color={color} speed={speed} size={size}/>
    </LoadContainer>
  );
};

export default LadderLoading;
