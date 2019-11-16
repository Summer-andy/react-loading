import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { DisappearedLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('DisappearedLoading', module)
  .addDecorator(withKnobs)
  .add('DisappearedLoading', () => {
    return (
      <Container>
        <DisappearedLoading style={{ margin: "100px 60px" }}></DisappearedLoading>
      </Container>
    );
  });
