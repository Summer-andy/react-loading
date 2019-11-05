import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { CommonLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('CommonLoading', module)
  .addDecorator(withKnobs)
  .add('CommonLoading', () => {
    return (
      <Container>
        <CommonLoading style={{ margin: "100px 60px" }}></CommonLoading>
      </Container>
    );
  });
