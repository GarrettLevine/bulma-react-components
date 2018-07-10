import React from 'react';

import { storiesOf } from '@storybook/react';
import { Header } from './Header';
import { wInfo } from '../../utils';
import { text, boolean } from '@storybook/addon-knobs/react';

storiesOf('Components/Button', module).addWithJSX(
  'basic Button',
  wInfo(`

  ### Notes

  This is a Header.

  ### Usage
  ~~~js
  <Header
    title="great"
    subtitle="wow"
    type="primary"
  />
  ~~~`
)(() => (
    <Header
      title="great header"
      subtitle="great subtitle"
      type="primary"
    />
  ))
);