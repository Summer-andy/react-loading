import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { CircleLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('CircleLoading', module)
  .addDecorator(withKnobs)
  .add(
    'CircleLoading',
    () => {
      return (
        <Container>
          <CircleLoading></CircleLoading>
        </Container>
      );
    }
  );
