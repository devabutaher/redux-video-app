import instance from "../../utils/axios";

export const getVideos = async () => {
  const response = await instance.get("/videos");

  return response.data;
};
