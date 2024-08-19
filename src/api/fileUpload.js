import { authInstance } from '.';
import axios from 'axios';

export const postPresignedURL = async file => {
  try {
    const response = await authInstance.post(`/file`, { fileName: file.name });
    console.log('응답 : ', response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putPresignedURL = async (url, file) => {
  try {
    const response = await axios.put(url, file);
    console.log(response);
  } catch (error) {
    throw error;
  }
};
