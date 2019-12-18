import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle } from '../utils/style';
const animation = keyframes`
    0%{
                transform: translate(-120px);
            }
            50%{
                transform: translate(0);
            }
            100%{
                transform: translate(120px);
            }
`;

const Container = styled.div`
  width: 120px;
  height: 8px;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 100px;
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
  animation: ${animation} ${props => props.speed || 2}s linear infinite;
`;

const ThreeHorseLoading = ({ speed, color, style = commonStyle }) => {
  return (
    <Container style={style} color={color}>
      <ItemSpan speed={speed} style={style} color={color} />
    </Container>
  );
};

export default ThreeHorseLoading;
