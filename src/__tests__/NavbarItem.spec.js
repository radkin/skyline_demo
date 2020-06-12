import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import NavbarItem, { Counter, dataReducer } from '../Navbar/NavbarItem';

describe('NavbarItem', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<NavbarItem />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
