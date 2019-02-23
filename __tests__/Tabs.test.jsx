import React from 'react';

import BasicComponent from '../src/BasicComponent';
import ControlledComponent from '../src/ControlledComponent';
import CustomTabComponent from '../src/CustomTabComponent';

test('Component 1', () => {
  const wrapper = mount(<BasicComponent />);
  expect(wrapper.render()).toMatchSnapshot();
});

test('Component 2', () => {
  const wrapper = mount(<ControlledComponent />);
  expect(wrapper.render()).toMatchSnapshot();

  const leftTab = wrapper.find('.react-tabs__tab').at(1);
  const rightTab = wrapper.find('.react-tabs__tab').at(2);

  leftTab.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  rightTab.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});

test('Component 3', () => {
  const wrapper = mount(<CustomTabComponent />);
  expect(wrapper.render()).toMatchSnapshot();

  const leftTab = wrapper.find('.react-tabs__tab').at(1);
  const rightTab = wrapper.find('.react-tabs__tab').at(2);

  leftTab.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  rightTab.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});
