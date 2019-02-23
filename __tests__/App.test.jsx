import React from 'react';
import ReactLogState from 'react-log-state';
import App from '../src/App';

test('Tabs container 1', () => {
  const wrapper = mount(<App />);
  const tabsContainers = wrapper.find('[data-test="tabs-container"]');
  const firstTabsContainer = tabsContainers.first();

  expect(firstTabsContainer).toContainMatchingElements(2, 'li[data-test="tab-anchor"]');

  const removeBtns = wrapper.find('[data-test="tab-remove"]');
  const firstRemoveBtn = removeBtns.first();
  firstRemoveBtn.simulate('click');

  const tabsContainersAfterRemove = wrapper.find('[data-test="tabs-container"]');
  const firstTabsContainerAfterRemove = tabsContainersAfterRemove.first();
  expect(firstTabsContainerAfterRemove).toContainMatchingElement('li[data-test="tab-anchor"]');
});
ReactLogState.logAll();
