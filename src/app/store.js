import { configureStore } from "@reduxjs/toolkit";
import relatedVideosSlice from "../features/relatedVideos/relatedVideosSlice";
import tagsSlice from "../features/tags/tagsSlice";
import videoSlice from "../features/video/videoSlice";
import videosSlice from "../features/videos/videoSlice";
import filterSlice from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    videos: videosSlice,
    tags: tagsSlice,
    video: videoSlice,
    relatedVideos: relatedVideosSlice,
    filters: filterSlice,
  },
});
