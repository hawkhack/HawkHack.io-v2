import React, { createContext, useReducer } from 'react';

import UPDATE_USER from './types';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((prev, action) => {
    switch (action.type) {
      case UPDATE_USER:
        return action.payload;
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
