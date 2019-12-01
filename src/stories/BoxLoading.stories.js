import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text  } from '@storybook/addon-knobs';
import { BoxLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('BoxLoading', module)
  .addDecorator(withKnobs)
  .add(
    'BoxLoading',
    () => {
      let speed = 1;
      let color = '';
      speed = number('动画速度(s)')
      color = text('颜色')
      return (
        <Container>
          <BoxLoading speed={speed} color={color}></BoxLoading>
        </Container>
      );
    }
  );
