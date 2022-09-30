import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'


export const fetchPost = createAsyncThunk("post/fetchPost", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return res.data
})
const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    post: [],
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchPost.pending, state => {
      state.isLoading = true
    })
    builder.addCase(fetchPost.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.post = payload
      state.error = null
    })
    builder.addCase(fetchPost.rejected, (state, {error}) => {
        state.isLoading = false
        state.post = []
        state.error = error.message
     })
  },
})

export default postSlice.reducer