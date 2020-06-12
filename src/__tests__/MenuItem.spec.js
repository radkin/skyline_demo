import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import MenuItem, { Counter, dataReducer } from '../Hamburger/MenuItem';

describe('MenuItem', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<MenuItem />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
