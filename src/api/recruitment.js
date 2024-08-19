import { instance, authInstance } from '.';

export const putRecruitment = async data => {
  try {
    const response = await authInstance.put(`/recruitment`, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getRecruitment = async () => {
  try {
    const response = await instance.get(`/recruitment`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
