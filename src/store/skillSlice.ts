import { createSlice } from "@reduxjs/toolkit";

export const skillSlice = createSlice({
  name: "skill",
  initialState: {
    skills: [],
  },
  reducers: {
    addSkill: (state) => {
      state.skills.push();
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSkill } = skillSlice.actions;

export default skillSlice.reducer;
