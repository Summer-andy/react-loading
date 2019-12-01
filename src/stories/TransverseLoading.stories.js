import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { TransverseLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('TransverseLoading', module)
  .addDecorator(withKnobs)
  .add('TransverseLoading', () => {
    let color = '';
    color = text('颜色')
    return (
      <Container>
        <TransverseLoading  color={color}  style={{ margin: "100px 60px" }}></TransverseLoading>
      </Container>
    );
  });
