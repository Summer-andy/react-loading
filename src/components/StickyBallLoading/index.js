import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeContainer, sizeItem } from '../utils/style';

const fly = keyframes`
  0% {
    transform: translateY(-8px);
  }

  50% {
    transform: translateY(12px);
    opacity: 0.3;
  }
  100% {
    transform: translateY(-8px);
  }
`;


const LoadContainer = styled.div`
  width: ${props => sizeContainer[props.size] || sizeContainer['default'] };
  height: ${props => sizeContainer[props.size] || sizeContainer['default'] };
  position: relative;
  /* overflow: hidden; */
`;

const BlurField = styled.div`
  width: ${props => sizeContainer[props.size] || sizeContainer['default'] };
  height: ${props => sizeContainer[props.size] || sizeContainer['default'] };
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const BallOne = styled.div`
  width: ${props => sizeItem[props.size] || sizeItem[props.size] };
  height: ${props => sizeItem[props.size] || sizeItem[props.size] };
  border-radius: 100%;
  position: relative;
  z-index: 1;
  background-color: ${props => props.color || '#00adb5' };
  animation: ${fly} ${props => props.speed || 2}s 0s infinite;
`

const BallTwo = styled.div`
  width: ${props => sizeItem[props.size] || sizeItem[props.size] };
  height: ${props => sizeItem[props.size] || sizeItem[props.size] };
  border-radius: 100%;
  position: relative;
  background-color: ${props => props.inColor || '#f9c094' };
  animation: ${fly} ${props => props.speed || 2}s -${props => props.speed/2 || 1}s infinite;
`

const StickyBallLoading = ({ style = commonStyle, color, inColor, speed, size = 'default' }) => {
  return (
    <LoadContainer style={style} size={size}>
      <BlurField>
        <BallOne color={color} speed={speed} size={size}/>
        <BallTwo inColor={inColor} speed={speed} size={size}/>
      </BlurField>
    </LoadContainer>
  );
};

export default StickyBallLoading;
