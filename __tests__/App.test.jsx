import React from 'react';
import App from '../src/App';

test('App full render', () => {
  const wrapper = mount(<App />);
  expect(wrapper.render()).toMatchSnapshot();
});

test('Tabs container 1', () => {
  const wrapper = mount(<App />);
  expect(wrapper.render()).toMatchSnapshot();

  const tabsContainers = wrapper.find('[data-test="tabs-container"]');
  const firstContainer = tabsContainers.at(1);
  const tabsAnchors = firstContainer.find('[data-test="tab-anchor"]');

  const leftTab = tabsAnchors.at(1);
  const rightTab = tabsAnchors.at(2);

  leftTab.simulate('click');
  expect(leftTab.render()).toMatchSnapshot();

  rightTab.simulate('click');
  expect(rightTab.render()).toMatchSnapshot();
});

test('Tabs container 2', () => {
  const wrapper = mount(<App />);
  expect(wrapper.render()).toMatchSnapshot();

  wrapper.html();
  const tabsContainers = wrapper.find('[data-test="tabs-container"]');
  const secondContainer = tabsContainers.at(2);
  const tabsAnchors = secondContainer.find('[data-test="tab-anchor"]');

  const leftTab = tabsAnchors.at(1);
  const rightTab = tabsAnchors.at(2);

  leftTab.simulate('click');
  expect(leftTab.render()).toMatchSnapshot();

  rightTab.simulate('click');
  expect(rightTab.render()).toMatchSnapshot();
  // eslint-disable-next-line
  debugger;
});
