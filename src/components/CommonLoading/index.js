import React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeItem } from '../utils/style';

const load = keyframes`
       0%{
            transform: rotate(0deg);
        }
        10%{
            transform: rotate(45deg);
        }
        50%{
            opacity: 1;
            transform: rotate(160deg);
        }
        62%{
            opacity: 0;
        }
        65%{
            opacity: 0;
            transform: rotate(200deg);
        }
        90%{
            transform: rotate(340deg);
        }
        100%{
            transform: rotate(360deg);
        }
`;

const Container = styled.div`
  width: 50px;
  height: 50px;
`;

const ItemDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${load} ${props => props.speed || 2}s linear infinite;
`;

const ItemDiv1 = styled(ItemDiv)`
  animation-delay: 0.2s;
`;

const ItemDiv2 = styled(ItemDiv)`
  animation-delay: 0.4s;
`;

const ItemDiv3 = styled(ItemDiv)`
  animation-delay: 0.6s;
`;

const ItemDiv4 = styled(ItemDiv)`
  animation-delay: 0.8s;
`;

const ItemSpan = styled.span`
  display: inline-block;
  height: ${props => sizeItem[props.size] || sizeItem['default']};
  width: ${props => sizeItem[props.size] || sizeItem['default']};
  border-radius: 50%;
  background: ${props => props.color || '#00adb5'};
  position: absolute;
  left: 50%;
  margin-top: -10px;
  margin-left: -10px;
`;

const CommonLoading = ({ style = commonStyle, speed, color, size = 'default' }) => {
  return (
    <Container {...{ style, speed, color, size }}>
      <ItemDiv1 speed={speed}>
        <ItemSpan color={color} size={size} />
      </ItemDiv1>
      <ItemDiv2 speed={speed}>
        <ItemSpan color={color} size={size} />
      </ItemDiv2>
      <ItemDiv3 speed={speed}>
        <ItemSpan color={color} size={size} />
      </ItemDiv3>
      <ItemDiv4 speed={speed}>
        <ItemSpan color={color} size={size} />
      </ItemDiv4>
    </Container>
  );
};

export default CommonLoading;
