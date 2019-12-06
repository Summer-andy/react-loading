import React from 'react';
import { shadow, animate } from './animate';
import { commonStyle, sizeContainer } from '../utils/style';
import styled from 'styled-components';
const LoadContainer = styled.div`
    width: ${props => sizeContainer[props.size] || sizeContainer['default']};
    height: ${props => sizeContainer[props.size] || sizeContainer['default']};
    &:before {
      content: '';
      width:${props => sizeContainer[props.size] || sizeContainer['default']};
      height: 5px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      top: calc(${props => sizeContainer[props.size] || sizeContainer['default']} + 10px) ;
      left: 0;
      border-radius: 50%;
      animation: ${animate} ${props => props.speed || 0.5}s linear infinite;
    }
    &:after {
      content: '';
      width: ${props => sizeContainer[props.size] || sizeContainer['default']};
      height:${props => sizeContainer[props.size] || sizeContainer['default']};
      background: ${props => props.color || '#00adb5'};
      animation: ${shadow} ${props => props.speed || 0.5}s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
`;

const BoxLoading = ({ style = commonStyle, color, speed, size="default" }) => {
  return (
    <LoadContainer style={style} color={color} speed={speed} size={size}></LoadContainer>
  );
};

export default BoxLoading;
