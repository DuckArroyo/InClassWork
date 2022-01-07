import React, { createContext, useContext } from 'react';
import { useBookReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

export const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useBookReducer({books:[], currentBook:{}});
  return <Provider value={[state, dispatch]} {...props} />;
};

export const useStoreContext = () => {
  return useContext(StoreContext);
};
