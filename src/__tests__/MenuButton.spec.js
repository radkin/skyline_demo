import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import MenuButton, { Counter, dataReducer } from '../Hamburger/MenuButton';

describe('MenuButton', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<MenuButton />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
