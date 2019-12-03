import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { LadderLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('LadderLoading', module)
  .addDecorator(withKnobs)
  .add(
    'LadderLoading',
    () => {
      let speed = 1;
      let color = '';
      speed = number('动画速度(s)')
      color = text('颜色')
      return (
        <Container>
          <LadderLoading speed={speed} color={color}></LadderLoading>
        </Container>
      );
    }
  );
