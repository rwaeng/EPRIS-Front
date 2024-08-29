import { authInstance, instance } from '.';

export const getSession = async type => {
  try {
    const response = await instance.get(`/sessions`, {
      params: { sessionType: type },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postSession = async (type, sessionInfo, imageUrlList) => {
  try {
    const response = await authInstance.post(
      `/sessions`,
      {
        sessionInfo: sessionInfo,
        imageUrlList: imageUrlList,
      },
      {
        params: { sessionType: type },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
