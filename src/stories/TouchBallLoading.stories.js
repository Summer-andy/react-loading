import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { TouchBallLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('TouchBallLoading', module)
  .addDecorator(withKnobs)
  .add('TouchBallLoading', () => {
    return (
      <Container>
        <TouchBallLoading style={{ width: 100, height: 100 }} speed={1}></TouchBallLoading>
      </Container>
    );
  });
