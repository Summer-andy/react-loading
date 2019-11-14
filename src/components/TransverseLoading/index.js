import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  margin: 50px auto;
  width: 150px;
  text-align: center;
`;

const load = styled.div`
  width: 20px;
  height: 20px;
  background-color: #00adb5;
  border-radius: 100%;
  display: inline-block;
  animation: ${bouncedelay} 1.4s infinite ease-in-out;
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

const TransverseLoading = ({ style }) => {
  return (
    <LoadingContainer style={style}>
        <LoadFirst />
        <LoadTwo />
        <LoadThree />
    </LoadingContainer>
  );
};

export default TransverseLoading;
