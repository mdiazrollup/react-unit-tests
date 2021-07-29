import 'jsdom-global/register';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../../components/App';
import rootReducer from '../../reducers';
import { render, fireEvent } from '@testing-library/react';

const store = createStore(rootReducer);

describe('connected component full app integration tests', () => {
  it('should add Todo item using fireEvent', () => {
    const text = 'buy milk';
    const { container, getByTestId, getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const inputElem = getByTestId('add-todo-input');
    fireEvent.change(inputElem, { target: { value: text } });
    fireEvent.click(getByText('Add Todo'));

    const liElem = container.querySelector('li');
    expect(liElem.textContent).toBe(text);
  });
});
