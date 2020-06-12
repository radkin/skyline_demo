import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import AnimatedNavbar, { Counter, dataReducer } from '../AnimatedNavbar';

describe('AnimatedNavbar', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<AnimatedNavbar />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
