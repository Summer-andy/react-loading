import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { TransverseLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('TransverseLoading', module)
  .addDecorator(withKnobs)
  .add('TransverseLoading', () => {
    return (
      <Container>
        <TransverseLoading style={{ margin: "100px 60px" }}></TransverseLoading>
      </Container>
    );
  });
