import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { BabelLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('BabelLoading', module)
  .addDecorator(withKnobs)
  .add(
    'BabelLoading',
    () => {

      let speed = 1;
      let color = '';
      speed = number('动画速度(s)')
      color = text('颜色')
      return (
        <Container>
          <BabelLoading speed={speed} color={color}></BabelLoading>
        </Container>
      );
    }
  );
