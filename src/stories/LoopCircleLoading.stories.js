import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, number  } from '@storybook/addon-knobs';
import { LoopCircleLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('LoopCircleLoading', module)
  .addDecorator(withKnobs)
  .add('LoopCircleLoading', () => {
    let color = '';
    let speed = 1.2;
    color = text('颜色')
    let size = radios(
      '动画尺寸',
      {
        'small': 'small',
        'default': 'default',
        'large': 'large'
      },
      'default'
    );
    speed = number('动画速度(s)')
    return (
      <Container>
        <LoopCircleLoading speed={speed} size={size} color={color}></LoopCircleLoading>
      </Container>
    );
  });
