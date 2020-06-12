import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import ResearchDropdown, { Counter, dataReducer } from '../DropdownContents/ResearchDropdown';

describe('ResearchDropdown', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<ResearchDropdown />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
