import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { BlockLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('BlockLoading', module)
  .addDecorator(withKnobs)
  .add(
    'BlockLoading',
    () => {
      return (
        <Container>
          <BlockLoading speed={8}></BlockLoading>
        </Container>
      );
    }
  );
