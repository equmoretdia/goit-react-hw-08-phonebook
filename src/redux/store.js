import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts & filter/contactsSlice';
import { filterReducer } from './contacts & filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
