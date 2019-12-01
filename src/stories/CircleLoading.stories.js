import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { CircleLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('CircleLoading', module)
  .addDecorator(withKnobs)
  .add(
    'CircleLoading',
    () => {
      let speed = 1;
      let color = '';
      speed = number('动画速度(s)')
      color = text('颜色')
      return (
        <Container>
          <CircleLoading speed={speed} color={color}></CircleLoading>
        </Container>
      );
    }
  );
