import React, { Component, Fragment } from 'react';
import {
  capitalize,
  maxBy,
  isEmpty,
  uniqueId,
} from 'lodash';
import randomWords from 'random-words';
import ReactLogState from 'react-log-state';
import Cookies from 'js-cookie';
import {
  Tab,
  TabPanel,
} from 'react-tabs';

import BasicComponent from './BasicComponent';
import CustomTabComponent from './CustomTabComponent';

import 'react-tabs/style/react-tabs.css';

ReactLogState.logAll();

const initTabsData = [
  { id: 0, title: 'Title', content: 'Content 1' },
  { id: 1, title: 'Another title', content: 'Another content' },
  { id: 2, title: 'New title', content: 'New content' },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.storage = props.storage || Cookies;
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

  getStorageTabIndex = () => {
    const activeTabIndex = this.storage.get('activeTab');
    return activeTabIndex ? Number(activeTabIndex) : 0;
  }

  saveTabIndex = (tabIndex) => {
    this.storage.set('activeTab', tabIndex);
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
            data-test="tab-remove"
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
          onSelect={this.saveTabIndex}
          renderTabsTitles={this.renderTabsTitles}
          renderTabsContent={this.renderTabsContent}
          getStorageTabIndex={this.getStorageTabIndex}
        />
        <CustomTabComponent />
      </div>
    );
  }
}
