import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {
      456: {
        id: "456",
        topicId: "123",
        name: "quiz for example topic",
        cardIds: ["789", "101", "102"],
      },
    },
  },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = action.payload;
    },
  },
});

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;
