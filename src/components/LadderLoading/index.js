import React from 'react';
import styled, { keyframes } from 'styled-components';

const leftLadderMove = keyframes`
  0% {
    transform: translateY(64px);
  }
  10%,
  50% {
    transform: translateY(0);
  }
  60%,
  100% {
    transform: translateY(-64px);
  }
`;

const rightLadderMove = keyframes`
  0%, 
  40% {
    transform: translateY(64px);
  }
  50%,
  90% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-64px);
  }
`;

const RowLadderOneMove = keyframes`
  0%, 
  10% {
    transform: translateY(64px);
  }
  20%,
  60% {
    transform: translateY(0);
  }
  70%,
  100% {
    transform: translateY(-64px);
  }
`;

const RowLadderTwoMove = keyframes`
  0%, 
  20% {
    transform: translateY(64px);
  }
  30%,
  70% {
    transform: translateY(0);
  }
  80%,
  100% {
    transform: translateY(-64px);
  }
`;

const RowLadderThreeMove = keyframes`
  0%, 
  30% {
    transform: translateY(64px);
  }
  40%,
  80% {
    transform: translateY(0);
  }
  90%,
  100% {
    transform: translateY(-64px);
  }
`;

const LoadContainer = styled.div`
  width: 20px;
  height: 64px;
  position: relative;
  overflow: hidden;
`;

const LeftLadder = styled.div`
  height: 0;
	width: 1px;
	border-bottom: 64px solid ${props => props.color || '#00adb5'};
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
	border-bottom: 64px solid ${props => props.color || '#00adb5'};
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

const LadderLoading = ({ style, color, speed }) => {
  return (
    <LoadContainer style={style}>
      <LeftLadder color={color} speed={speed}/>
      <RightLadder color={color} speed={speed}/>
      <RowLadderOne color={color} speed={speed}/>
      <RowLadderTwo color={color} speed={speed}/>
      <RowLadderThree color={color} speed={speed}/>
    </LoadContainer>
  );
};

export default LadderLoading;
