import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, radios, text } from '@storybook/addon-knobs';
import { PassThrouthLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('PassThrouthLoading', module)
  .addDecorator(withKnobs)
  .add(
    'PassThrouthLoading',
    () => {
      let speed = 1;
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
      let color = text('颜色')
      return (
        <Container>
          <PassThrouthLoading color={color} size={size} speed={speed}></PassThrouthLoading>
        </Container>
      );
    }
  );
