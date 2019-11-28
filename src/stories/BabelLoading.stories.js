import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { BabelLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('BabelLoading', module)
  .addDecorator(withKnobs)
  .add(
    'BabelLoading',
    () => {
      return (
        <Container>
          <BabelLoading speed={2}></BabelLoading>
        </Container>
      );
    }
  );
