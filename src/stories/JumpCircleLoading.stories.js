import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { JumpCircleLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('JumpCircleLoading', module)
  .addDecorator(withKnobs)
  .add(
    'JumpCircleLoading',
    () => {
      let speed = 0.5;
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
          <JumpCircleLoading speed={speed} color={color} size={size}></JumpCircleLoading>
        </Container>
      );
    }
  );
