import React from 'react';
import styled from 'styled-components';
import { Rotate, animateFirst, animateTwo, animateThree, animateFour } from './animate';
import { commonStyle, sizeContainer, sizeItem } from '../utils/style';
const LoadContainer = styled.div`
  width: ${props => sizeContainer[props.size] || sizeContainer['default'] };
  height: ${props => sizeContainer[props.size] || sizeContainer['default'] };
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  animation: ${Rotate} ${props => props.speed || 8}s infinite ease-in-out;
`;

const Item = styled.div`
  width: ${props => sizeItem[props.size] || sizeItem['default'] };
  height: ${props => sizeItem[props.size] || sizeItem['default'] };
  margin: auto;
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

const BlockLoading = ({ style = commonStyle, speed, size="default" }) => {
  return (
    <LoadContainer style={style} speed={speed} size={size}>
      <ItemFirst speed={speed} size={size}></ItemFirst>
      <ItemTwo speed={speed} size={size}></ItemTwo>
      <ItemFour speed={speed} size={size}></ItemFour>
      <ItemThree speed={speed} size={size}></ItemThree>
    </LoadContainer>
  );
};

export default BlockLoading;
