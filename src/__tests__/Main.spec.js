import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Main, { Counter, dataReducer } from '../Hamburger/Main';

describe('Main', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<Main />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
