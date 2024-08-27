import { authInstance, instance } from '.';

export const getCorporate = async () => {
  try {
    const response = await instance.get(`/corporate-project`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postCorporate = async (projectInfo, imageUrlList) => {
  try {
    const response = await authInstance.post(`/corporate-project`, {
      projectInfo: projectInfo,
      imageUrlList: imageUrlList,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getLogo = async () => {
  try {
    const response = await instance.get(`/corporate-logo`, {
      params: { type: 'project' },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postLogo = async imageList => {
  try {
    const response = await authInstance.post(
      '/corporate-logo',
      { imageUrlList: imageList },
      {
        params: {
          type: 'project',
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
