import { instance } from '.';

export const getClassinfo = async () => {
  try {
    const response = await instance.get(`/class-info`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateClassinfo = async classInfo => {
  try {
    const response = await instance.put(`/class-info`, classInfo);
  } catch (error) {
    console.log(error);
  }
};
