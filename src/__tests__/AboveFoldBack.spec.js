import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import AboveFoldBack, { Counter, dataReducer } from '../Components/AboveFoldBack';

describe('AboveFoldBack', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<AboveFoldBack />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
