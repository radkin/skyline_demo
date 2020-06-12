import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from "enzyme"
import AnimatedNavbar, { Counter, dataReducer } from '../AnimatedNavbar';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('AnimatedNavbar', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<AnimatedNavbar />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

/*
WHY ISN'T THIS IMPROVING COVERAGE?
it('activeIndices state', () => {
  const wrapper = shallow(<AnimatedNavbar/>);
  wrapper.simulate('onMouseEnter');
  expect('activeIndices' in wrapper.props()).not.toEqual('[]');
});

it('animatingOut state', () => {
  const wrapper = shallow(<AnimatedNavbar/>);
  wrapper.simulate('onMouseEnter');
  expect('animatingOut' in wrapper.props()).toEqual(false);
});
*/
