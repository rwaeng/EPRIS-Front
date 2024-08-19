import { instance, authInstance } from '.';

export const postLogos = async (type, data) => {
  try {
    const response = await authInstance.put(`/corporate-logo?type=${type}`, {
      imageUrlList: data,
    });
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getLogos = async type => {
  try {
    const response = await instance.get(`/corporate-logo?type=${type}`);
    return response.data.imageList;
  } catch (error) {
    throw error;
  }
};
