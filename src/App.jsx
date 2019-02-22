import React from 'react';

import 'react-tabs/style/react-tabs.css';

import BasicComponent from './BasicComponent';
import ControlledComponent from './ControlledComponent';
import CustomTabComponent from './CustomTabComponent';

const App = () => (
  <>
    <BasicComponent />
    <ControlledComponent />
    <CustomTabComponent />
  </>
);

export default App;
