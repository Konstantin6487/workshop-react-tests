import React from 'react';
import ReactLogState from 'react-log-state';
import App from '../src/App';

ReactLogState.logAll();

const containerIndex = 0;

const cookiesStub = () => {
  const cookie = {};
  return {
    set: (field, value) => { cookie[field] = value; },
    get: field => cookie[field],
  };
};

const selectors = {
  addTabBtn: 'input[data-test="tab-add"]',
  container: `ul[data-test="tabs-container-${containerIndex}"]`,
  removeTabBtn: 'input[data-test="tab-remove"]',
  tabAnchor: 'li[data-test="tab-anchor"]',
};

const buildSelectors = component => ({
  getAddBtn: () => component.find(selectors.addTabBtn),

  getContainer: () => component.find(selectors.container),

  getRemoveBtns: btnIndex => component
    .find(selectors.container)
    .find(selectors.removeTabBtn).at(btnIndex),

  getTab: tabIndex => component
    .find(selectors.container)
    .find(selectors.tabAnchor)
    .at(tabIndex),
});

test('Tabs container 0: remove tab', () => {
  const wrapper = mount(<App />);
  const tree = buildSelectors(wrapper);
  const tabsContainerOne = tree.getContainer();
  expect(tabsContainerOne).toContainMatchingElements(3, selectors.tabAnchor);

  const firstTabRemoveBtn = tree.getRemoveBtns(0);
  firstTabRemoveBtn.simulate('click');

  const updatedTree = buildSelectors(wrapper);
  const tabsContainerUpdated = updatedTree.getContainer();
  expect(tabsContainerUpdated).toContainMatchingElements(2, selectors.tabAnchor);
});

test('Tabs container 0: add tab', () => {
  const wrapper = mount(<App />);
  const tree = buildSelectors(wrapper);
  const tabsContainerOne = tree.getContainer(containerIndex);
  expect(tabsContainerOne).toContainMatchingElements(3, selectors.tabAnchor);

  const addBtn = tree.getAddBtn();
  addBtn.simulate('click');

  const tabsContainerOneUpdated = tree.getContainer();
  expect(tabsContainerOneUpdated).toContainMatchingElements(4, selectors.tabAnchor);
});

test('Tabs container 0: change tab', () => {
  const wrapper = mount(<App />);
  const tree = buildSelectors(wrapper);
  const firstTab = tree.getTab(0);
  const sndTab = tree.getTab(1);
  expect(firstTab).toHaveProp('aria-selected', 'true');
  sndTab.simulate('click');

  const sndTabUpdated = tree.getTab(1);
  expect(sndTabUpdated).toHaveProp('aria-selected', 'true');
});

test('Tabs container 0: restore active tab', () => {
  const cookies = cookiesStub();
  const wrapper = mount(<App storage={cookies} />);
  const tree = buildSelectors(wrapper);
  const thirdTab = tree.getTab(2);
  expect(thirdTab).toHaveProp('aria-selected', 'false');
  thirdTab.simulate('click');

  const wrapperUpdated = mount(<App storage={cookies} />);
  const treeUpdated = buildSelectors(wrapperUpdated);
  const thirdTabUpdated = treeUpdated.getTab(2);
  expect(thirdTabUpdated).toHaveProp('aria-selected', 'true');
});
