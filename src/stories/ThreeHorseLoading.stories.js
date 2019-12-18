import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
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
      return (
        <Container>
          <ThreeHorseLoading color={color} speed={speed}></ThreeHorseLoading>
        </Container>
      );
    }
  );
