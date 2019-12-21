import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeContainer } from '../utils/style';
const changeSharp = keyframes`
 0%{
   height: 0px;
  },
  100%{
    height: 6px;
  }
`;

const LoadContainer = styled.div`
  height: ${props => sizeContainer[props.size] || sizeContainer['default']};
  width: ${props => sizeContainer[props.size] || sizeContainer['default']};
  border: 1px ${props => props.color || '#00adb5'}  solid;
  border-radius: 0px 0px 5px 5px;
  position: relative;
  &::after {
    content: '';
    width: 5px;
    height: 12px;
    position: absolute;
    border: 1px solid ${props => props.color || '#00adb5'};
    border-left: none;
    border-radius: 0px ${props => sizeContainer[props.size] || sizeContainer['default']} ${props => sizeContainer[props.size] || sizeContainer['default']} 0px;
    top: 4px;
    left: ${props => sizeContainer[props.size] || sizeContainer['default']};
  }
  &::before {
    content: '';
    width: 1px;
    height: 6px;
    position: absolute;
    background-color: ${props => props.color || '#00adb5'};
    top: -10px;
    left: ${props => props.size === 'small' ? 6 : (props.size === 'large' ? 12 : 8)}px;
    box-shadow: 5px 0px 0px 0px ${props => props.color || '#00adb5'}, 5px -5px 0px 0px ${props => props.color || '#00adb5'}, 10px 0px 0px 0px ${props => props.color || '#00adb5'};
    animation: ${changeSharp} ${props => props.speed || 1}s linear infinite alternate;
  }
`;

const CoffeeLoading = ({ style = commonStyle, color, size = 'default', speed }) => {
  return <LoadContainer style={style} color={color} size={size} speed={speed}></LoadContainer>;
};

export default CoffeeLoading;
