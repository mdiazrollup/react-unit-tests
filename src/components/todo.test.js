import React from 'react';
import Todo from './Todo';
import { configure, shallow, mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Todo /> unit test', () => {
  const mockFn = jest.fn();
  const props = { onClick: mockFn, completed: false, text: 'buy milk' };
  let component;

  beforeEach(() => {
    component = shallow(<Todo {...props} />);
  });

  it('should render 1 <todo/> component', () => {
    expect(component).toHaveLength(1);
    expect(component.find('li')).toHaveLength(1);
  });

  it('should update props correctly', () => {
    component.setProps({ text: 'hello' });
    expect(component.prop('children')).toBe('hello');
  });

  it('should call onClick when todo is clicked', () => {
    component.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe('<todo/> styling behaviour', () => {
  const mockFn = jest.fn();

  it('should render 1 <todo/> component completed', () => {
    const component = shallow(
      <Todo onClick={mockFn} completed={true} text="buy milk" />
    );
    expect(component.prop('onClick')).toEqual(mockFn);
    expect(component.prop('children')).toBe('buy milk');
    expect(component.prop('style').textDecoration).toBe('line-through');
  });

  it('should render 1 <todo/> component not completed', () => {
    const component = shallow(
      <Todo onClick={mockFn} completed={false} text="buy milk" />
    );
    expect(component.prop('onClick')).toEqual(mockFn);
    expect(component.prop('children')).toBe('buy milk');
    expect(component.prop('style').textDecoration).toBe('none');
  });
});
