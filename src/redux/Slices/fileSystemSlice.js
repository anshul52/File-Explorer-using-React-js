import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fileSystem: {
    name: "root",
    isFolder: true,
    children: [],
  },
  selected: null,
};

const fileSystemSlice = createSlice({
  name: "fileSystem",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelected } = fileSystemSlice.actions;
export const selectFileSystem = (state) => state.fileSystem.fileSystem;
export default fileSystemSlice.reducer;
