import * as actions from './index';

describe('Test for actions', () => {
  it('should create an action to add Todo', () => {
    const text = 'go shopping';
    const expectedAction = {
      type: 'ADD_TODO',
      id: 0,
      text,
    };

    expect(actions.addTodo(text)).toEqual(expectedAction);
  });

  it('should create an action to set visivility filter', () => {
    const filter = 'SHOW_ALL';

    expect(actions.setVisibilityFilter(filter).filter).toEqual(filter);
  });

  it('should create an action to set toggle todo', () => {
    const id = 0;
    const expectedAction = {
      type: 'TOGGLE_TODO',
      id,
    };

    expect(actions.toggleTodo(id)).toEqual(expectedAction);
  });
});
