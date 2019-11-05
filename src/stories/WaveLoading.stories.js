import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { WaveLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('WaveLoading', module)
  .addDecorator(withKnobs)
  .add('WaveLoading', () => {
    return (
      <Container>
        <WaveLoading style={{ margin: "100px 60px" }}></WaveLoading>
      </Container>
    );
  });
