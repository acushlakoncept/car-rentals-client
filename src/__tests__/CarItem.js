import React from 'react';
import renderer from 'react-test-renderer';
import CarItem from '../components/CarItem';

it('renders CarItem correctly', () => {
  const car = {
    id: 1,
    image: 'https://source.unsplash.com/800x600/?car,black',
    name: 'Chevy Malibu 2020 Grey',
    ac: 'yes',
    date_added: '2021-01-22T19:37:44.393Z',
    transmission: 'Automatic',
  };
  const tree = renderer.create(<CarItem car={car} handleFavourite={jest.fn()} />);
  expect(tree).toMatchSnapshot();
});
