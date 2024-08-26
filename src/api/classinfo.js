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
  const accessToken = localStorage.getItem('token');

  if (!accessToken) {
    console.error('No access token found, please log in.');
    return;
  }

  try {
    const response = await instance.put(`/class-info`, classInfo, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
