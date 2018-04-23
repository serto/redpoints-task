
import React from 'react';
import renderer from 'react-test-renderer';

import { MovieElement } from '../components/common/MovieElement';
import { Link } from 'react-router-dom'

const testProps = {
  title: 'Coco',
  imagesrc: 'eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
  id: 354912
};

test('Movie Element have image and title', () => {

  const component = renderer.create(
    <MovieElement {...testProps} />
  );

  const image = component.find('img');
  expect(image.length).toEqual(1);

  const title = component.find('h3');
  expect(title.length).toEqual(1);
});
