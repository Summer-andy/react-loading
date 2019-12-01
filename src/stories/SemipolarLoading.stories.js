import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { SemipolarLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('SemipolarLoading', module)
  .addDecorator(withKnobs)
  .add(
    'SemipolarLoading',
    () => {
      return (
        <Container>
          <SemipolarLoading></SemipolarLoading>
        </Container>
      );
    }
  );
