import React from 'react';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  to {
    opacity: 0.3;
  }
`;

const LoadContainer = styled.div`
  width: 5em;
  height: 5em;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  > div:nth-child(2) > div:nth-child(4) {
    animation-delay: ${props => props.speed * (1 / 6) || 0.25}s;
  }
  > div:nth-of-type(3),
  > div:nth-of-type(5),
  > div:nth-of-type(7) {
    animation-delay: ${props => props.speed / 3 || 0.5}s;
  }
  > div:nth-of-type(6),
  > div:nth-of-type(8) {
    animation-delay: ${props => props.speed / 2 || 0.75}s;
  }
  > div:nth-of-type(9) {
    animation-delay: ${props => props.speed * (2 / 3) || 1}s;
  }
`;

const Item = styled.div`
  width: 0.8em;
  height: 0.8em;
  background-color: ${props => props.color || '#00adb5'};
  border-radius: 50%;
animation: ${animate} ${props => props.speed || 1.5}s alternate ease-in-out infinite;
`;

const NineCellLoading = ({ style, color, speed }) => {
  return (
    <LoadContainer style={style} speed={speed}>
      {
       Array.from(Array(9)).map((item, index) => <Item color={color} speed={speed} key={index}/>)
      }
    </LoadContainer>
  );
};

export default NineCellLoading;
