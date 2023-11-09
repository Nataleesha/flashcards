import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {
      123: {
        id: "123",
        name: "example topic",
        icon: "icon url",
        quizIds: ["456"],
      },
    },
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = { id, name, icon, quizIds: [] };
    },
  },
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
