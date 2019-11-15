import React from 'react';
import { shadow, animate } from './animate';
import styled from 'styled-components';
const LoadContainer = styled.div`
    width: 50px;
    height: 50px;
    &:before {
      content: '';
      width: 50px;
      height: 5px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      top: 59px;
      left: 0;
      border-radius: 50%;
      animation: ${animate} 0.5s linear infinite;
    }
    &:after {
      content: '';
      width: 50px;
      height: 50px;
      background: ${props => props.color || '#00adb5'};
      animation: ${shadow} 0.5s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
`;

const BoxLoading = ({ style, color }) => {
  return (
    <LoadContainer style={style} color={color}></LoadContainer>
  );
};

export default BoxLoading;
