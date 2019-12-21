import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeContainer } from '../utils/style';
const changeSharp = (color, size) => keyframes`
    0%{box-shadow: inset 0px 0px 0px ${color};}
    100%{box-shadow: inset ${size} 0px 0px ${color}}
`;

const LoadContainer = styled.div`
  width: ${props => sizeContainer[props.size] || sizeContainer['default']};
  height: 14px;
  border: 1px #fff solid;
  border-radius: 2px;
  position: relative;
  animation: ${props =>
      changeSharp(props.color || '#00adb5', sizeContainer[props.size] || sizeContainer['default'])}
    ${props => props.speed || 4}s linear infinite;
  &::after {
    width: 2px;
    height: 7px;
    background-color: #fff;
    border-radius: 0px 1px 1px 0px;
    position: absolute;
    content: '';
    top: 2px;
    right: -4px;
  }
`;

const BatteryLoading = ({ style = commonStyle, color, size = 'default', speed }) => {
  return <LoadContainer style={style} color={color} size={size} speed={speed}></LoadContainer>;
};

export default BatteryLoading;
