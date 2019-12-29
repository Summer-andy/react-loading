import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios  } from '@storybook/addon-knobs';
import { DiamonLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('DiamonLoading', module)
  .addDecorator(withKnobs)
  .add('DiamonLoading', () => {
    let speed = 1;
    let color = '';
    speed = number('动画速度(s)')
    color = text('颜色')
    // let size = radios(
    //   '动画尺寸',
    //   {
    //     'small': 'small',
    //     'default': 'default',
    //     'large': 'large'
    //   },
    //   'default'
    // );
    return (
      <Container>
        <DiamonLoading speed={speed} color={color} ></DiamonLoading>
      </Container>
    );
  });
