import React from 'react';
import { shadow, animate } from './animate';
import styled from 'styled-components';
const LoadContainer = styled.div`
    width: 50px;
    height: 50px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
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
      background: #00adb5;
      animation: ${shadow} 0.5s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
`;

const BoxLoading = ({ style }) => {
  return (
    <LoadContainer></LoadContainer>
  );
};

export default BoxLoading;
