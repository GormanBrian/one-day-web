import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";
import skillSlice from "./skillSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    skill: skillSlice,
  },
});
