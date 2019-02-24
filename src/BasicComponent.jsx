import React from 'react';
import { Tabs, TabList } from 'react-tabs';

const BasicComponent = ({
  getStorageTabIndex,
  onSelect,
  renderTabsTitles,
  renderTabsContent,
}) => (
  <Tabs defaultIndex={getStorageTabIndex()} onSelect={onSelect}>
    <TabList data-test="tabs-container-0">{renderTabsTitles()}</TabList>
    {renderTabsContent()}
  </Tabs>
);

export default BasicComponent;
