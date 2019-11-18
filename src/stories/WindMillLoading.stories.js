import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { WindMillLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('WindMillLoading', module)
  .addDecorator(withKnobs)
  .add('WindMillLoading', () => {
    return (
      <Container>
        <WindMillLoading></WindMillLoading>
      </Container>
    );
  });
