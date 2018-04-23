
import React from 'react';
import renderer from 'react-test-renderer';

const API_KEY = '892376643df7e1fd6dc72567108ec2e5'

import { SearchForm } from '../components/common/SearchForm';

const testProps = {
    handleChange: jest.fn(),
    handleSelect: jest.fn(),
};

test('Input in form', () => {

  /*
  beforeEach(function() {

    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          results: ['movie'], 
          isSearch: true
        });
      });
      return p;
    });

  });

  
  const component = renderer.create(
    <SearchForm {...testProps} />
  );

  const input = component.find('input');
  expect(input.length).toEqual(0);
  */
});