import React from 'react';
import styled, { keyframes } from 'styled-components';

const stretchdelay = keyframes`
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
`;

const LoadContainer = styled.div`
  width: 100px;
  height: 60px;
  text-align: center;
  font-size: 10px;
`;

const box = styled.div`
  background-color: #00adb5;
  height: 100%;
  width: 6px;
  display: inline-block;
  margin-left: 5px;
  animation: ${stretchdelay} 1.2s infinite ease-in-out;
`;

const BoxLoadingFirst = styled(box)`
  animation-delay: -1.2s;
`;

const BoxLoadingTwo = styled(box)`
  animation-delay: -1.1s;
`;

const BoxLoadingThree = styled(box)`
  animation-delay: -1s;
`;

const BoxLoadingFour = styled(box)`
  animation-delay: -0.9s;
`;

const BoxLoadingFive = styled(box)`
  animation-delay: -0.8s;
`;

const WaveLoading = ({ style }) => {
  return (
    <LoadContainer style={style}>
      <BoxLoadingFirst />
      <BoxLoadingTwo />
      <BoxLoadingThree />
      <BoxLoadingFour />
      <BoxLoadingFive />
    </LoadContainer>
  );
};

export default WaveLoading;
