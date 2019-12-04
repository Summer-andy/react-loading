import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle } from '../utils/style';

const animation = keyframes`
	0% {
		-webkit-transform: scale(0.1);
		opacity: 1;
	}
	50% {
		-webkit-transform: scale(1);
		opacity: 0.5;
	}
	100% {
		-webkit-transform: scale(1.5);
		opacity: 0.1;
	}
`

const Container = styled.div`
  height: 50px;
  width: 50px;
  border-radius:25px;
  background:  ${props => props.color || '#00adb5'};
  animation: ${animation}  ${props => props.speed || 2}s linear infinite;
`

const BabelLoading = ({ style = commonStyle, speed, color }) => {
  return (
    <Container {...{style, speed, color }} />
  );
};

export default BabelLoading;
