import React from 'react';
import styled from 'styled-components';
import { Rotate, animateFirst, animateTwo, animateThree, animateFour } from './animate';
const LoadContainer = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  animation: ${Rotate} ${props => props.speed || 8}s infinite ease-in-out;
`;

const Item = styled.div`
  width: 20px;
  height: 20px;
`;

const ItemFirst = styled(Item)`
  animation: ${animateFirst} ${props => props.speed / 4 || 2}s infinite ease-in-out;
`;

const ItemTwo = styled(Item)`
  animation: ${animateTwo} ${props => props.speed / 4 || 2}s infinite ease-in-out;
`;

const ItemThree = styled(Item)`
  animation: ${animateThree} ${props => props.speed / 4 || 2}s infinite ease-in-out;
`;

const ItemFour = styled(Item)`
  animation: ${animateFour} ${props => props.speed / 4 || 2}s infinite ease-in-out;
`;

const BlockLoading = ({ style, speed }) => {
  return (
    <LoadContainer style={style} speed={speed}>
      <ItemFirst speed={speed}></ItemFirst>
      <ItemTwo speed={speed}></ItemTwo>
      <ItemFour speed={speed}></ItemFour>
      <ItemThree speed={speed}></ItemThree>
    </LoadContainer>
  );
};

export default BlockLoading;
