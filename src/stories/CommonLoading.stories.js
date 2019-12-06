import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs , text } from '@storybook/addon-knobs';
import { CommonLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('CommonLoading', module)
  .addDecorator(withKnobs)
  .add('CommonLoading', () => {
    let color = '';
    color = text('颜色');
    return (
      <Container>
        <CommonLoading color={color}></CommonLoading>
      </Container>
    );
  });
