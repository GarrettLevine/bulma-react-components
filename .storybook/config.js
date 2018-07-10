import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import '@storybook/addon-console';
// import './normalize.scss';
// import './default.scss';
// import '../src/main.scss';

const req = require.context('../src', true, /\.story\.js$/);

addDecorator(story => (
  <div style={{
    padding: 20,
    overflow: 'auto',
    height: '100vh',
    width: '100%',
  }}>
    {story()}
  </div>
))

function loadStories() {
  req.keys().forEach((filename) => req(filename));
  // You can require as many stories as you need.
}

configure(loadStories, module);