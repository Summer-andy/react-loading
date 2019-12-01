import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text  } from '@storybook/addon-knobs';
import { CircleToBlockLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('CircleToBlock', module)
  .addDecorator(withKnobs)
  .add(
    'CircleToBlock',
    () => {
      let color = '';
      color = text('颜色')
      return (
        <Container>
          <CircleToBlockLoading  color={color}></CircleToBlockLoading>
        </Container>
      );
    }
  );
