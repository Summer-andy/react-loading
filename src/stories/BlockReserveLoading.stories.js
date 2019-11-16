import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { BlockReserveLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('BlockReserveLoading', module)
  .addDecorator(withKnobs)
  .add(
    'BlockReserveLoading',
    () => {
      return (
        <Container>
          <BlockReserveLoading></BlockReserveLoading>
        </Container>
      );
    }
  );
