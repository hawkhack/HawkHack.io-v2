import React, { createContext, useReducer } from 'react';

import UPDATE_USER from './types';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [val, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case UPDATE_USER:
        return action.payload;
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ val, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
