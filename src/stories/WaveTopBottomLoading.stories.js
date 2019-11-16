import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { WaveTopBottomLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('WaveTopBottomLoading', module)
  .addDecorator(withKnobs)
  .add('WaveTopBottomLoading', () => {
    return (
      <Container>
        <WaveTopBottomLoading style={{ margin: "100px 60px" }}></WaveTopBottomLoading>
      </Container>
    );
  });
