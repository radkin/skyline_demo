import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import PrecisionDropdown, { Counter, dataReducer } from '../DropdownContents/PrecisionDropdown';

describe('PrecisionDropdown', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<PrecisionDropdown />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
