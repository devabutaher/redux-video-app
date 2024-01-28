import instance from "../../utils/axios";

export const getVideo = async (id) => {
  const response = await instance.get(`/videos/${id}`);

  return response.data;
};
