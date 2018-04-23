
import React from 'react';
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

const API_KEY = '892376643df7e1fd6dc72567108ec2e5'

import { SearchForm } from '../components/common/SearchForm';

const testProps = {
    handleChange: jest.fn(),
    handleSelect: jest.fn(),
};

test('Input in form', async() => {

  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve({
      results: ['movie'], 
      isSearch: true
    })
  }))

  const wrapper = shallow(<SearchForm {...testProps} />)
  expect(wrapper.find('input').exists()).toEqual(true);

});