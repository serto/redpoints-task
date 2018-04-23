
import React from 'react';
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

import { MovieElement } from '../components/common/MovieElement';


const testProps = {
  title: 'Coco',
  imagesrc: 'eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
  id: 354912
};

test('Movie Element have image and title', () => {

  const wrapper = shallow(<MovieElement {...testProps}/>)

  expect(
    shallow(<MovieElement  {...testProps}/>)
    .find('img').exists())
  .toEqual(true);

  expect(
    shallow(<MovieElement  {...testProps}/>)
    .find('h3').exists())
  .toEqual(true);

});
