import React from 'react';
import ReactLogState from 'react-log-state';
import App from '../src/App';

ReactLogState.logAll();


test('Tabs container 1: remove tab', () => {
  const wrapper = mount(<App />);
  const tabsContainerTop = wrapper.find('ul[data-test="tabs-container-1"]');
  expect(tabsContainerTop).toContainMatchingElements(3, 'li[data-test="tab-anchor"]');

  const removeBtns = tabsContainerTop.find('input[data-test="tab-remove"]');
  const firstTabRemoveBtn = removeBtns.at(0);
  firstTabRemoveBtn.simulate('click');

  const tabsContainerTopUpdated = wrapper.find('ul[data-test="tabs-container-1"]');
  expect(tabsContainerTopUpdated).toContainMatchingElements(2, 'li[data-test="tab-anchor"]');
});

test('Tabs container top: add tab', () => {
  const wrapper = mount(<App />);
  const tabsContainerTop = wrapper.find('ul[data-test="tabs-container-1"]');
  expect(tabsContainerTop).toContainMatchingElements(3, 'li[data-test="tab-anchor"]');

  const addBtn = wrapper.find('input[data-test="tab-add"]');
  addBtn.simulate('click');

  const tabsContainerTopUpdated = wrapper.find('ul[data-test="tabs-container-1"]');
  expect(tabsContainerTopUpdated).toContainMatchingElements(4, 'li[data-test="tab-anchor"]');
});

test('Tabs container top: change tab', () => {
  const wrapper = mount(<App />);

  const tabsContainerTop = wrapper.find('ul[data-test="tabs-container-1"]');
  const tabs = tabsContainerTop.find('li[data-test="tab-anchor"]');
  const firstTab = tabs.at(0);
  const sndTab = tabs.at(1);
  expect(firstTab).toHaveProp('aria-selected', 'true');
  sndTab.simulate('click');

  const tabsContainerTopUpdated = wrapper.find('ul[data-test="tabs-container-1"]');
  const tabsUpdated = tabsContainerTopUpdated.find('li[data-test="tab-anchor"]');
  const sndTabUpdated = tabsUpdated.at(1);
  expect(sndTabUpdated).toHaveProp('aria-selected', 'true');
});
