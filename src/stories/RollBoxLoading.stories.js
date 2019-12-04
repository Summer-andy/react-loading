import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { RollBoxLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('RollBoxLoading', module)
  .addDecorator(withKnobs)
  .add(
    'RollBoxLoading',
    () => {
      let speed = 1.5;
      let color = '';
      let size = '';
      speed = number('动画速度(s)');
      color = text('颜色');
      size = text('尺寸');
      return (
        <Container>
          <RollBoxLoading speed={speed} color={color} size={size}></RollBoxLoading>
        </Container>
      );
    }
  );
