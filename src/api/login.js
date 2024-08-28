import { authInstance, instance } from '.';

export const postLogin = async password => {
  try {
    const response = await instance.post(`/admin/login`, {
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postLogout = async () => {
  try {
    const response = await authInstance.post(`/admin/logout`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAccessToken = async () => {
  try {
    const response = await instance.post(`/token`, {
      refreshToken: localStorage.getItem('refresh'),
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
