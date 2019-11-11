import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { CircleToBlockLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('CircleToBlock', module)
  .addDecorator(withKnobs)
  .add(
    'CircleToBlock',
    () => {
      return (
        <Container>
          <CircleToBlockLoading></CircleToBlockLoading>
        </Container>
      );
    }
  );
