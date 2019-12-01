import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { JumpCircleLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('JumpCircleLoading', module)
  .addDecorator(withKnobs)
  .add(
    'JumpCircleLoading',
    () => {
      return (
        <Container>
          <JumpCircleLoading></JumpCircleLoading>
        </Container>
      );
    }
  );
