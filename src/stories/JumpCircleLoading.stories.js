import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { JumpCircleLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('JumpCircleLoading', module)
  .addDecorator(withKnobs)
  .add(
    'JumpCircleLoading',
    () => {
      let speed = 0.5;
      let color = '';
      let size = '';
      speed = number('动画速度(s)');
      color = text('颜色');
      size = text('尺寸');
      return (
        <Container>
          <JumpCircleLoading speed={speed} color={color} size={size}></JumpCircleLoading>
        </Container>
      );
    }
  );
