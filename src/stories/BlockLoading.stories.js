import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, radios } from '@storybook/addon-knobs';
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
      speed = number('动画速度(s)')
      return (
        <Container>
          <BlockLoading size={size} speed={speed}></BlockLoading>
        </Container>
      );
    }
  );
