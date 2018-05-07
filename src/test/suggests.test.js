
import React from 'react';
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

import Suggests from '../components/common/Suggests';


const testProps = {
  list: [{id: 1, title: "Star Wars"}],
};

test('render the li element if we have an array', () => {

  const wrapper = shallow(<Suggests {...testProps}/>)

  expect(
    shallow(<Suggests  {...testProps}/>)
    .find('li').exists())
  .toEqual(true);

});
