import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios  } from '@storybook/addon-knobs';
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
          <BoxLoading size={size} speed={speed} color={color}></BoxLoading>
        </Container>
      );
    }
  );
