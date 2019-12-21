import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, radios, text } from '@storybook/addon-knobs';
import { BlockLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('BlockLoading', module)
  .addDecorator(withKnobs)
  .add(
    'BlockLoading',
    () => {
      let speed = 1;
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
      color = text('颜色')
      speed = number('动画速度(s)')
      return (
        <Container>
          <BlockLoading size={size} speed={speed} color={color}></BlockLoading>
        </Container>
      );
    }
  );
