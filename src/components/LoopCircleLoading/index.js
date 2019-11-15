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
  position: absolute;
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
  background-color: ${props => props.color || '#00adb5'} ;
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

const LoopCircleLoading = ({ style, color }) => {
  return (
    <LoadContainer style={style}>
      <ContainerFirst>
        <CircleFirst color={color} />
        <CircleTwo color={color} />
        <CircleThree color={color} />
        <CircleFour color={color} />
      </ContainerFirst>
      <ContainerTwo>
        <CircleFirst1 color={color} />
        <CircleTwo1 color={color} />
        <CircleThree1 color={color} />
        <CircleFour1 color={color} />
      </ContainerTwo>
      <ContainerThree>
        <CircleFirst2 color={color} />
        <CircleTwo2 color={color} />
        <CircleThree2 color={color} />
        <CircleFour2 color={color} />
      </ContainerThree>
    </LoadContainer>
  );
};

export default LoopCircleLoading;
