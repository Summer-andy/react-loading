import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeItem } from '../utils/style';
const bouncedelay = keyframes`
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
`

const LoadingContainer = styled.div`
  width: 150px;
  height: 150px;
  text-align: center;
`;

const load = styled.div`
  width: ${props => sizeItem[props.size] || sizeItem['default'] };
  height: ${props => sizeItem[props.size] || sizeItem['default'] };
  margin-top: calc(50% -  ${props => sizeItem[props.size] || sizeItem['default'] } / 2);
  background-color: ${props => props.color || '#00adb5'};
  border-radius: 100%;
  display: inline-block;
  animation: ${bouncedelay} ${props => props.speed || 1.4}s infinite ease-in-out;
  animation-fill-mode: both;
`

const LoadFirst = styled(load)`
  animation-delay: -0.48s;
`

const LoadTwo = styled(load)`
  animation-delay: -0.32s;
`

const LoadThree = styled(load)`
  animation-delay: -0.16s;

`

const TransverseLoading = ({ style = commonStyle, color, speed, size="default" }) => {
  return (
    <LoadingContainer style={style}>
        <LoadFirst color={color} size={size} speed={speed} />
        <LoadTwo color={color} size={size} speed={speed} />
        <LoadThree color={color} size={size} speed={speed} />
    </LoadingContainer>
  );
};

export default TransverseLoading;
