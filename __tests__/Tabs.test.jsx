import React from 'react';
import renderer from 'react-test-renderer';
import BasicComponent from '../src/BasicComponent';
import ControlledComponent from '../src/ControlledComponent';
import CustomTabComponent from '../src/CustomTabComponent';

describe('react-test-renderer', () => {
  test('<BasicComponent />', () => {
    const component = renderer.create(<BasicComponent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<ControlledComponent />', () => {
    const component = renderer.create(<ControlledComponent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<CustomTabComponent />', () => {
    const component = renderer.create(<CustomTabComponent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
