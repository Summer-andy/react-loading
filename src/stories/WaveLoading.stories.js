import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { WaveLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('WaveLoading', module)
  .addDecorator(withKnobs)
  .add('WaveLoading', () => {
    let color = '';
    color = text('颜色')
    return (
      <Container>
        <WaveLoading color={color} ></WaveLoading>
      </Container>
    );
  });
