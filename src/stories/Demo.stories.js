import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { CommonLoading } from '~/components';
import Container from './compoment/DemoContainer';
storiesOf('Demo', module)
  .addDecorator(withKnobs)
  .add('Demo', () => {
    return (
      <Container>

      </Container>
    );
  });
