import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";

const initialState = {
  threads: [],
};

const threadsSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {
    set: (state, action) => {
      state.threads = action.payload;
    },
  },
});

export const getAllThreads = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("/threads");
    dispatch(set(data));
  } catch (error) {
    console.log(error);
  }
};

export const { set } = threadsSlice.actions;

export default threadsSlice.reducer;
