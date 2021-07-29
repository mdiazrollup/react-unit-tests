import todos from './todos';

describe('Todos Reducer unit test', () => {
  it('should return empty state if no action is pass', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it('should return state with updated ADD_TODO', () => {
    const addTodoAction = { type: 'ADD_TODO', id: 1, text: 'buy milk' };

    expect(todos([], addTodoAction)).toEqual([
      { ...addTodoAction, completed: false, type: undefined },
    ]);
  });

  it('should return state with updated ADD_TODO with not empty state', () => {
    const initialState = [
      {
        id: 1,
        text: 'buy car',
        completed: true,
      },
    ];
    const addTodoAction = { type: 'ADD_TODO', id: 2, text: 'buy milk' };

    expect(todos(initialState, addTodoAction)).toEqual([
      ...initialState,
      { ...addTodoAction, completed: false, type: undefined },
    ]);
  });

  it('should return state with updated todo completed state', () => {
    const initialState = [
      {
        id: 1,
        text: 'buy car',
        completed: true,
      },
      {
        id: 2,
        text: 'buy milk',
        completed: false,
      },
    ];
    const toggleTodoAction = { type: 'TOGGLE_TODO', id: 1 };

    const newState = todos(initialState, toggleTodoAction);
    expect(newState.length).toBe(initialState.length);
    expect(newState[0].completed).toEqual(!initialState[0].completed);
  });
});
