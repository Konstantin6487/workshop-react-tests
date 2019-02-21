import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import App from '../src/App';

test('App', () => {
  const component = renderer.create(<App name="Sergey" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('allows us to set props', () => {
  const wrapper = mount(<App name="Ivan" />);
  expect(wrapper.render()).toMatchSnapshot();
});

it('renders three <Foo /> components', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div').length).toEqual(1);
});
