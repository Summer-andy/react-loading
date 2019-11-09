import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { BlockLoading } from '~/components';
import * as AAA from '~/components';
import Container from './compoment/Container';
storiesOf('BlockLoading', module)
  .addDecorator(withKnobs)
  .add(
    'BlockLoading',
    () => {
      console.log(typeof BlockLoading);
      console.log(AAA);
      return (
        <Container>
          <BlockLoading></BlockLoading>
        </Container>
      );
    }
  );
