import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { addTodo, toggleTodo } from '../../actions';

describe('redux store integration tests', () => {
  let store;

  beforeEach(() => {
    store = createStore(rootReducer);
  });

  it('should add 1 Todo', () => {
    const text = 'buy milk';
    store.dispatch(addTodo(text));
    const todo = store.getState().todos.find((x) => x.text === text);
    expect(todo).toBeDefined();
    expect(todo.id).toBe(0);
    expect(todo.completed).toEqual(false);
  });

  it('should toogle 1 Todo', () => {
    const text = 'buy milk';
    store.dispatch(addTodo(text));
    const todo = store.getState().todos.find((x) => x.text === text);
    expect(todo).toBeDefined();
    expect(todo.completed).toEqual(false);

    store.dispatch(toggleTodo(todo.id));
    const tTodo = store.getState().todos.find((x) => x.id === todo.id);
    expect(tTodo).toBeDefined();
    expect(tTodo.completed).toEqual(!todo.completed);
  });
});
