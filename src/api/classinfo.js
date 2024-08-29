import { authInstance, instance } from '.';

export const getClassinfo = async () => {
  try {
    const response = await instance.get(`/class-info`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateClassinfo = async classInfo => {
  try {
    const response = await authInstance.put(`/class-info`, classInfo);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
