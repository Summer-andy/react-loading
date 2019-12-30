import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { BlockRotateLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('BlockRotateLoading', module)
  .addDecorator(withKnobs)
  .add(
    'BlockRotateLoading',
    () => {
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
          <BlockRotateLoading size={size} speed={speed} color={color}></BlockRotateLoading>
        </Container>
      );
    }
  );
