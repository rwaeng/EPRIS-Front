import { authInstance, instance } from '.';

export const getAwards = async () => {
  try {
    const response = await instance.get(`/award`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putAwards = async (awardsInfo, projectNum, awardsNum) => {
  try {
    const response = await authInstance.put(`/award`, {
      awardsInfo: awardsInfo,
      projectNum: projectNum,
      awardsNum: awardsNum,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
