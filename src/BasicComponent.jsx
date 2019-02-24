import React from 'react';
import { Tabs, TabList } from 'react-tabs';

const BasicComponent = ({ renderTabsTitles, renderTabsContent }) => (
  <Tabs>
    <TabList data-test="tabs-container-1">{renderTabsTitles()}</TabList>
    {renderTabsContent()}
  </Tabs>
);

export default BasicComponent;
