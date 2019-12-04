import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text  } from '@storybook/addon-knobs';
import { LoopCircleLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('LoopCircleLoading', module)
  .addDecorator(withKnobs)
  .add('LoopCircleLoading', () => {
    let color = '';
    color = text('颜色')
    return (
      <Container>
        <LoopCircleLoading color={color}></LoopCircleLoading>
      </Container>
    );
  });
