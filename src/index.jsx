import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(<App name="Alex" />, document.getElementById('root'));

module.hot.accept();
