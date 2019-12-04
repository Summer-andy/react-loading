import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { WaveTopBottomLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('WaveTopBottomLoading', module)
  .addDecorator(withKnobs)
  .add('WaveTopBottomLoading', () => {
    let speed = 1;
    let color = '';
    speed = number('动画速度(s)')
    color = text('颜色')
    return (
      <Container>
        <WaveTopBottomLoading  speed={speed} color={color} ></WaveTopBottomLoading>
      </Container>
    );
  });
