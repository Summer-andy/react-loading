import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { RotateCircleLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('RotateCircleLoading', module)
  .addDecorator(withKnobs)
  .add(
    'RotateCircleLoading',
    () => {
      return (
        <Container>
          <RotateCircleLoading></RotateCircleLoading>
        </Container>
      );
    }
  );
