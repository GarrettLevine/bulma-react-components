import React from 'react';

import { storiesOf } from '@storybook/react';
import { Header } from '../Header';

storiesOf('Components/Header', module).add(
  'Hero Header',
  () => (
    <Header
      title="Great Header"
      subtitle="great subtitle"
      type="is-primary"
    />
  ));