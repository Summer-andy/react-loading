import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { HeartBoomLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('HeartBoomLoading', module)
  .addDecorator(withKnobs)
  .add(
    'HeartBoomLoading',
    () => {
      let speed = 2;
      let color = '';
      let size = '';
      speed = number('动画速度(s)');
      color = text('颜色');
      size = text('尺寸');
      return (
        <Container>
          <HeartBoomLoading speed={speed} color={color} size={size}></HeartBoomLoading>
        </Container>
      );
    }
  );
