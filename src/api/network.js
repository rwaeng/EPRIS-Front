import { authInstance, instance } from '.';

export const getNetwork = async () => {
  try {
    const response = await instance.get(`/networks`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postNetwork = async (type, networkInfo, imageUrl) => {
  try {
    const response = await authInstance.post(
      `/networks`,
      {
        networkInfo: networkInfo,
        imageUrl: imageUrl,
      },
      {
        params: { type: type },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
