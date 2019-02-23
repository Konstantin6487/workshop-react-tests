import React from 'react';

import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from 'react-tabs';

const CustomTab = ({ children }) => (
  <Tab data-test="tab-anchor">
    <h1>{children}</h1>
  </Tab>
);

CustomTab.tabsRole = 'Tab'; // Required field to use your custom Tab

const CustomTabComponent = () => (
  <Tabs>
    <TabList data-test="tabs-container">
      <CustomTab>Custom Tab 1</CustomTab>
      <CustomTab>Custom Tab 2</CustomTab>
    </TabList>
    <TabPanel>Panel 1</TabPanel>
    <TabPanel>Panel 2</TabPanel>
  </Tabs>
);

export default CustomTabComponent;
