import { configureStore } from "@reduxjs/toolkit";
import fileSystemReducer from "./Slices/fileSystemSlice";

export const store = configureStore({
  reducer: {
    fileSystem: fileSystemReducer,
  },
});

export default store;
