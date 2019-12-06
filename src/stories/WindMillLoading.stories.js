import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, radios } from '@storybook/addon-knobs';
import { WindMillLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('WindMillLoading', module)
  .addDecorator(withKnobs)
  .add('WindMillLoading', () => {
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
        <WindMillLoading size={size} speed={speed} color={color}></WindMillLoading>
      </Container>
    );
  });
