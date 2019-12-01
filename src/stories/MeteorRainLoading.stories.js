import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MeteorRainLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('MeteorRainLoading', module)
  .addDecorator(withKnobs)
  .add(
    'MeteorRainLoading',
    () => {
      return (
        <Container>
          <MeteorRainLoading></MeteorRainLoading>
        </Container>
      );
    }
  );
