import React from 'react';
import renderer from 'react-test-renderer';
import CallToAction from '../components/CallToAction';

it('renders CallToAction correctly', () => {
  const tree = renderer.create(<CallToAction />);
  expect(tree).toMatchSnapshot();
});
