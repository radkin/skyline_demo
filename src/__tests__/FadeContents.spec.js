import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import FadeContents, { Counter, dataReducer } from '../DropdownContainer/FadeContents';

describe('FadeContents', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<FadeContents />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
