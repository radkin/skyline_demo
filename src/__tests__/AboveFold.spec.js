import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import AboveFold, { Counter, dataReducer } from '../Components/AboveFold';

describe('AboveFold', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<AboveFold />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
