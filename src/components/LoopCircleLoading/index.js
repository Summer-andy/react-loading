import React from 'react';
import styled, { keyframes } from 'styled-components';

const bouncedelay = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
`;

const LoadContainer = styled.div`
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 48px;
  height: 48px;
`;

const container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const circle = styled.div`
  width: 12px;
  height: 12px;
  background-color: #00adb5;
  border-radius: 100%;
  position: absolute;
  animation: ${bouncedelay} 1.2s infinite ease-in-out;
  animation-fill-mode: both;
`;

const ContainerFirst = styled(container)``;

const ContainerTwo = styled(container)`
  transform: rotateZ(45deg);
`;

const ContainerThree = styled(container)`
  transform: rotateZ(90deg);
`;

const CircleFirst = styled(circle)`
  top: 0;
  left: 0;
`;

const CircleTwo = styled(circle)`
  animation-delay: -0.9s;
  top: 0;
  right: 0;
`;

const CircleThree = styled(circle)`
  animation-delay: -0.6s;
  right: 0;
  bottom: 0;
`;

const CircleFour = styled(circle)`
  animation-delay: -0.3s;
  left: 0;
  bottom: 0;
`;

const CircleFirst1 = styled(circle)`
  top: 0;
  left: 0;
  animation-delay: -1.1s;
`;

const CircleTwo1 = styled(circle)`
  animation-delay: -0.8s;
  top: 0;
  right: 0;
`;

const CircleThree1 = styled(circle)`
  animation-delay: -0.5s;
  right: 0;
  bottom: 0;
`;

const CircleFour1 = styled(circle)`
  animation-delay: -0.2s;
  left: 0;
  bottom: 0;
`;

const CircleFirst2 = styled(circle)`
  top: 0;
  left: 0;
  animation-delay: -1s;
`;

const CircleTwo2 = styled(circle)`
  animation-delay: -0.7s;
  top: 0;
  right: 0;
`;

const CircleThree2 = styled(circle)`
  animation-delay: -0.4s;
  right: 0;
  bottom: 0;
`;

const CircleFour2 = styled(circle)`
  animation-delay: -0.1s;
  left: 0;
  bottom: 0;
`;

const LoopCircleLoading = ({ style }) => {
  return (
    <LoadContainer style={style}>
      <ContainerFirst>
        <CircleFirst />
        <CircleTwo />
        <CircleThree />
        <CircleFour />
      </ContainerFirst>
      <ContainerTwo>
        <CircleFirst1 />
        <CircleTwo1 />
        <CircleThree1 />
        <CircleFour1 />
      </ContainerTwo>
      <ContainerThree>
        <CircleFirst2 />
        <CircleTwo2 />
        <CircleThree2 />
        <CircleFour2 />
      </ContainerThree>
    </LoadContainer>
  );
};

export default LoopCircleLoading;
