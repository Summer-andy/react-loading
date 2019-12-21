import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs , text, number, radios } from '@storybook/addon-knobs';
import {  BatteryLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('BatteryLoading', module)
  .addDecorator(withKnobs)
  .add('BatteryLoading', () => {
    let speed = 1;
    let color = '';
    speed = number('动画速度(s)')
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
    return (
      <Container>
        <BatteryLoading color={color} speed={speed} size={size}></BatteryLoading>
      </Container>
    );
  });
