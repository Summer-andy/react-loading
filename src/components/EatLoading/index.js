import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeItem } from '../utils/style';

const load = keyframes`
 0% {
 transform: rotate(0deg);
}
 100% {
 transform: rotate(-360deg);
}
`;

const Container = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 75px;
  display: inline-block;
  vertical-align: middle;
  border: 8px dotted ${props => props.color || '#00adb5'} ;
  transition: all 1s ease;
  animation: ${load} ${props => props.speed || 1}s linear infinite;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.color || '#00adb5'} ;
  border-left-width: 2px;
  border-left-color:  ${props => props.color || '#00adb5'} ;
  border-top-width: 3px;
  border-right-width: 4px;
  border-top-color:  ${props => props.color || '#00adb5'} ;
`;

const ItemDiv = styled.div`
  position: absolute;
  top: 45px;
  left: 25px;
  width: 0px;
  height: 0px;
  border-right: 12px solid transparent;
  border-top: 12px solid ${props => props.color || '#00adb5'} ;
  border-left: 12px solid ${props => props.color || '#00adb5'} ;
  border-bottom: 12px solid ${props => props.color || '#00adb5'} ;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const EatLoading = ({ style = commonStyle, speed, color }) => {
  return (
    <Container {...{ style, speed, color }}>
      <ItemDiv color={color}></ItemDiv>
    </Container>
  );
};

export default EatLoading;
