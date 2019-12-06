import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text,number, radios } from '@storybook/addon-knobs';
import { TransverseLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('TransverseLoading', module)
  .addDecorator(withKnobs)
  .add('TransverseLoading', () => {

    let color = '';
    let speed = number('动画速度(s)');
    color = text('颜色');
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
        <TransverseLoading size={size} speed={speed}  color={color} ></TransverseLoading>
      </Container>
    );
  });
