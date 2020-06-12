import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Menu, { Counter, dataReducer } from '../Hamburger/Menu';

describe('Menu', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<Menu />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
