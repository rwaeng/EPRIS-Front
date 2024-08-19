import { authInstance } from '.';
import axios from 'axios';

export const postPresignedURL = async file => {
  //이미지 파일을 post 하여 presigned url을 전달받는 함수
  try {
    const data = { fileName: file.name };
    const response = await authInstance.post(`/file`, data);
    console.log('응답 : ', response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putPresignedURL = async (url, file) => {
  //발급받은 presigned url에 이미지 파일을 저장하는 함수
  try {
    const response = await axios.put(url, file);
    console.log(response);
  } catch (error) {
    throw error;
  }
};
