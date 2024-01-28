import instance from "../../utils/axios";

export const getTags = async () => {
  const response = await instance.get("/tags");

  return response.data;
};
