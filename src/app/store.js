import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../features/videos/videoSlice";

export const store = configureStore({
  reducer: {
    videos: videoSlice,
  },
});
