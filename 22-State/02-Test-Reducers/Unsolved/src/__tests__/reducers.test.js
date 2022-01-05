import { reducer } from '../utils/reducers';

import { UPDATE_BOOKS, UPDATE_CURRENT_BOOK } from '../utils/actions';

const initialState = {};

test('UPDATE_BOOKS', () => {
  const newState = reducer(initialState, {
    type: UPDATE_BOOKS,
    books: [{}, {}],
  });
  expect(newState.books.length).toBe(2);
});

test('UPDATE_CURRENT_BOOK', () => {
  const newState = reducer(initialState, {
    type: UPDATE_CURRENT_BOOK,
    currentBook: { title: 'book2' },
  });

  expect(newState.currentBook.title).toBe('book2');
});

test('UPDATE_CURRENT_BOOK', () => {
  const newState = reducer(initialState, {
    type: UPDATE_CURRENT_BOOK,
    currentBook: { title: 'book2' },
  });
  expect(initialState.currentBook.title).toBe('On The Road');
});
