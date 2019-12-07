import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeContainer, sizeItem } from '../utils/style';

const bounce = keyframes`
  0% {
    transform: translateY(0) scaleX(1.2) scaleY(0.8);
  }
  25% {
    transform: translateY(-10px) scaleX(1) scaleY(1);
  }
  100% {
    background-color: #f9c094;
    transform: translateY(-40px);
  }
`;

const LoadContainer = styled.div`
  width: ${props => sizeContainer[props.size] || sizeContainer['default'] };
  height: ${props => sizeContainer[props.size] || sizeContainer['default'] };
  position: relative;
  /* overflow: hidden; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Circle = styled.div`
  width: ${props => sizeItem[props.size] || sizeItem['default'] };
  height: ${props => sizeItem[props.size] || sizeItem['default'] };
  border-radius: 50%;
  background-color: ${props => props.color || '#00adb5' };
  animation: ${bounce} ${props => props.speed || 0.5}s ease-out infinite alternate;
`;

const BottomReac = styled.div`
  width: ${props => sizeContainer[props.size] || sizeContainer['default'] };
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${props => props.color || '#00adb5' };
`


const JumpCircleLoading = ({ style = commonStyle, color, speed, size = 'default'}) => {
  return (
    <LoadContainer style={style} size={size}>
      <Circle color={color} speed={speed} size={size}/>
      <BottomReac color={color} size={size}/>
    </LoadContainer>
  );
};

export default JumpCircleLoading;
