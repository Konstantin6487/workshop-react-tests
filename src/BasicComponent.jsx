import React from 'react';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';

const BasicComponent = () => (
  <Tabs>
    <TabList data-test="tabs-container">
      <Tab data-test="tab-anchor">Title 1</Tab>
      <Tab data-test="tab-anchor">Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
);

export default BasicComponent;
