import React from 'react';
import BasicComponent from '../src/BasicComponent';
import ControlledComponent from '../src/ControlledComponent';
import CustomTabComponent from '../src/CustomTabComponent';

describe('enzyme', () => {
  test('<BasicComponent />', () => {
    const wrapper = mount(<BasicComponent />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('<ControlledComponent />', () => {
    const wrapper = mount(<ControlledComponent />);
    expect(wrapper.render()).toMatchSnapshot();

    wrapper.find('.react-tabs__tab').at(1).simulate('click');
    expect(wrapper.render()).toMatchSnapshot();

    wrapper.find('.react-tabs__tab').at(2).simulate('click');
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('<CustomTabComponent />', () => {
    const wrapper = mount(<CustomTabComponent />);
    expect(wrapper.render()).toMatchSnapshot();

    wrapper.find('.react-tabs__tab').at(1).simulate('click');
    expect(wrapper.render()).toMatchSnapshot();

    wrapper.find('.react-tabs__tab').at(2).simulate('click');
    expect(wrapper.render()).toMatchSnapshot();
  });
});
