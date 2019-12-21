import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle } from '../utils/style';
const animation = width => keyframes`
    0%{
          transform: translate(-${width}px);
      }
      50%{
          transform: translate(0);
      }
      100%{
          transform: translate(${width}px);
      }
`;

const Container = styled.div`
  width: ${props => props.size === 'small' ? 60 : (props.size === 'large' ? 100 : 80)}px;
  height: 8px;
  border-radius: 4px;
  margin: 0 auto;
  position: relative;
  background: #fff;
  overflow: hidden;
`;

const ItemSpan = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background: ${props => props.color || '#00adb5'};
  animation: ${props => animation(props.size === 'small' ? 60 : (props.size === 'large' ? 100 : 80))} ${props => props.speed || 2}s linear infinite;
`;

const ThreeHorseLoading = ({ speed, color, style = commonStyle, size="default" }) => {
  return (
    <Container style={style} color={color} size={size}>
      <ItemSpan speed={speed} style={style} color={color} size={size} />
    </Container>
  );
};

export default ThreeHorseLoading;
