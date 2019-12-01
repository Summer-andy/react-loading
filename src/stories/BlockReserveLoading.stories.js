import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { BlockReserveLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('BlockReserveLoading', module)
  .addDecorator(withKnobs)
  .add(
    'BlockReserveLoading',
    () => {
      let speed = 1;
      let color = '';
      speed = number('动画速度(s)')
      color = text('颜色')
      return (
        <Container>
          <BlockReserveLoading speed={speed} color={color}></BlockReserveLoading>
        </Container>
      );
    }
  );
