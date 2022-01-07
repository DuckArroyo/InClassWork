// Remove all traces of useReducer
import { UPDATE_BOOKS, UPDATE_CURRENT_BOOK } from './actions';

// create initialState for the reducer to use
//
const initialState = {
  books: [],
  currentBook: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BOOKS:
      return {
        ...state,
        books: [...action.books],
      };

    case UPDATE_CURRENT_BOOK:
      return {
        ...state,
        currentBook: { ...action.currentBook },
      };
    default:
      return state;
  }
};

export default reducer;
//! removed to convert to redux
// export function useBookReducer(initialState) {
//   return useReducer(reducer, initialState);
// }

// Export the reducer
