import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import RevealSkyline, { Counter, dataReducer } from '../Components/RevealSkyline';

describe('RevealSkyline', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<RevealSkyline />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
