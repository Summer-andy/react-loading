import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import DemoContainer from './compoment/DemoContainer';
storiesOf('Demo', module)
  .addDecorator(withKnobs)
  .add(
    'Demo',
    () => {
      return (
        <DemoContainer />
      );
    }
  );
