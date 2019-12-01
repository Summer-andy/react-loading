import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { StickyBallLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('StickyBallLoading', module)
  .addDecorator(withKnobs)
  .add(
    'StickyBallLoading',
    () => {
      return (
        <Container>
          <StickyBallLoading></StickyBallLoading>
        </Container>
      );
    }
  );
