import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Footer, { Counter, dataReducer } from '../Hamburger/Footer';

describe('Footer', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<Footer />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
