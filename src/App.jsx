import React, { Component, Fragment } from 'react';
import {
  capitalize,
  maxBy,
  isEmpty,
  uniqueId,
} from 'lodash';
import randomWords from 'random-words';
import ReactLogState from 'react-log-state';

import {
  Tab,
  TabPanel,
} from 'react-tabs';

import BasicComponent from './BasicComponent';
import CustomTabComponent from './CustomTabComponent';

import 'react-tabs/style/react-tabs.css';

const initTabsData = [
  { id: 0, title: 'Title', content: 'Content 1' },
  { id: 1, title: 'Another title', content: 'Another content' },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tabsData: initTabsData };
  }

  addTab = () => {
    const { tabsData } = this.state;
    let newTabId;
    if (isEmpty(tabsData)) {
      newTabId = 0;
    } else {
      newTabId = maxBy(tabsData, 'id').id + 1;
    }
    const newTabTitle = randomWords({ exactly: 1, formatter: capitalize, join: ' ' });
    const newTabContent = randomWords({ exactly: 2, formatter: capitalize, join: ' ' });
    const updatedTabsData = [
      ...tabsData, {
        id: newTabId,
        title: newTabTitle,
        content: newTabContent,
      },
    ];
    this.setState({ tabsData: updatedTabsData });
  }

  removeTab = (tabId) => {
    const { tabsData } = this.state;
    const updatedTabsData = tabsData.filter(({ id }) => id !== tabId);
    this.setState({ tabsData: updatedTabsData });
  }

  renderTabsTitles = () => {
    const { tabsData } = this.state;
    if (isEmpty(tabsData)) {
      return null;
    }
    return tabsData.map(({ id, title }) => (
      <Fragment key={uniqueId()}>
        <Tab data-test="tab-anchor">
          {title}
          {' '}
          <input
            type="button"
            style={{ border: 'none', background: 'inherit' }}
            value="x"
            onClick={this.removeTab.bind(null, id)}
          />
        </Tab>
      </Fragment>
    ));
  }

  renderTabsContent = () => {
    const { tabsData } = this.state;
    if (isEmpty(tabsData)) {
      return null;
    }
    return tabsData.map(({ content }) => (
      <Fragment key={uniqueId()}>
        <TabPanel>
          <h2>{content}</h2>
        </TabPanel>
      </Fragment>
    ));
  }

  render() {
    return (
      <div>
        <input
          data-test="tab-add"
          onClick={this.addTab}
          type="button"
          value="Add tab"
          text="add tab"
        />
        <BasicComponent
          renderTabsTitles={this.renderTabsTitles}
          renderTabsContent={this.renderTabsContent}
        />
        <CustomTabComponent />
      </div>
    );
  }
}

ReactLogState.logAll();
