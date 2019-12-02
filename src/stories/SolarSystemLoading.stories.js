import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs,number, text } from '@storybook/addon-knobs';
import { SolarSystemLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('SolarSystemLoading', module)
  .addDecorator(withKnobs)
  .add(
    'SolarSystemLoading',
    () => {
      let speed = 1;
      let color = '';
      speed = number('动画速度(s)')
      color = text('颜色')
      return (
        <Container>
          <SolarSystemLoading speed={speed} color={color}></SolarSystemLoading>
        </Container>
      );
    }
  );
