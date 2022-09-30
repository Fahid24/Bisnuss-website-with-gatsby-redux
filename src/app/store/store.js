import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../function/counter/counterSlice'
import postReducer from '../function/post/postSlice'
 const store = configureStore({
  reducer: {

    counter: counterReducer,
    post: postReducer
  },
});

export default store;