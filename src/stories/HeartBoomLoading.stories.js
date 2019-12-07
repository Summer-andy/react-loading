import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { HeartBoomLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('HeartBoomLoading', module)
  .addDecorator(withKnobs)
  .add(
    'HeartBoomLoading',
    () => {
      let speed = 2;
      let color = '';
      let size = radios(
        '动画尺寸',
        {
          'small': 'small',
          'default': 'default',
          'large': 'large'
        },
        'default'
      );
      speed = number('动画速度(s)');
      color = text('颜色');
      return (
        <Container>
          <HeartBoomLoading speed={speed} color={color} size={size}></HeartBoomLoading>
        </Container>
      );
    }
  );
