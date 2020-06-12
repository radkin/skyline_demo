import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import InsightDropdown, { Counter, dataReducer } from '../DropdownContents/InsightDropdown';

describe('InsightDropdown', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<InsightDropdown />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
