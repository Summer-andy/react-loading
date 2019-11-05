import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { BoxLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('BoxLoading', module)
  .addDecorator(withKnobs)
  .add(
    'BoxLoading',
    () => {
      return (
        <Container>
          <BoxLoading></BoxLoading>
        </Container>
      );
    },
    {
      notes: 'This is the button of Ant Design'
    }
  );
