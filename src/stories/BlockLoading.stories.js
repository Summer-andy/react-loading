import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { BlockLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('BlockLoading', module)
  .addDecorator(withKnobs)
  .add(
    'BlockLoading',
    () => {
      let speed = 1;
      let color = '';
      speed = number('动画速度(s)')
      return (
        <Container>
          <BlockLoading speed={speed}></BlockLoading>
        </Container>
      );
    }
  );
