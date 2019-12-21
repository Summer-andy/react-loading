import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { ThreeHorseLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('ThreeHorseLoading', module)
  .addDecorator(withKnobs)
  .add(
    'ThreeHorseLoading',
    () => {
      let speed = 1;
      speed = number('动画速度(s)')
      let color = text('颜色')
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
          <ThreeHorseLoading color={color} speed={speed} size={size}></ThreeHorseLoading>
        </Container>
      );
    }
  );
