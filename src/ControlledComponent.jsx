import React, { Component } from 'react';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';

export default class ControlledComponent extends Component {
  state = { tabIndex: 0 };

  handleSelect = (tabIndex) => {
    this.setState({ tabIndex });
  };

  render() {
    const { tabIndex } = this.state;
    return (
      <Tabs selectedIndex={tabIndex} onSelect={this.handleSelect}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>
        <TabPanel />
        <TabPanel />
      </Tabs>
    );
  }
}
