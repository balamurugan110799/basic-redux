import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Learning Tollkit", content: "It's Easy" },
  { id: 2, title: "SubScribe...", content: "Like and Share the Video" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
        console.log(state, action);
      },
      // prepare(title, content) {
      //   return {
      //     payload:{
      //       id: nanoid(),
      //       title,
      //       content
      //     }
      //   };
      // },
    },
    // postAdded:(state,action)=>{
    //   state.push(action.payload)
    //   console.log(state,action)
    // }
  },
});

export const selectAllPost = (state) => state.posts;
export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
