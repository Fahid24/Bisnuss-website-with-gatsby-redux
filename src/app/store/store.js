import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../function/counter/counterSlice'

 const store = configureStore({
  reducer: {

    counter: counterReducer,
  },
});

export default store;