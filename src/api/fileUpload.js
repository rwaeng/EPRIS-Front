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

export const uploadImages = async (imgFile) => {
  return await Promise.all(
    imgFile.map(async file => {
      const { data: presignedUrl } = await postPresignedURL(file); // presigned url 발급
      await putPresignedURL(presignedUrl, file); // 발급받은 presigned url에 이미지 업로드
      return { imageUrl: presignedUrl.split('?')[0] }; // 쿼리파라미터 제외 url 추출
    }),
  );
};
