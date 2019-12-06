import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, radios } from '@storybook/addon-knobs';
import { WaveLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('WaveLoading', module)
  .addDecorator(withKnobs)
  .add('WaveLoading', () => {
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
        <WaveLoading speed={speed} size={size} color={color} ></WaveLoading>
      </Container>
    );
  });
