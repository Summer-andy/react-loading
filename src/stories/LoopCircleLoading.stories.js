import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { LoopCircleLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('LoopCircleLoading', module)
  .addDecorator(withKnobs)
  .add('LoopCircleLoading', () => {
    return (
      <Container>
        <LoopCircleLoading style={{ margin: "100px 60px" }}></LoopCircleLoading>
      </Container>
    );
  });
