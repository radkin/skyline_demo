import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import People, { Counter, dataReducer } from '../Components/People';

describe('People', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<People />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
