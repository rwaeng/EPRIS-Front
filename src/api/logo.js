import { instance, authInstance } from '.';

export const postLogos = async (type, urlList) => {
  // 로고 이미지를 저장한 presigned url 리스트를 백엔드에 전달
  try {
    const data = {
      imageUrlList: urlList,
    };

    const response = await authInstance.post(
      `/corporate-logo?type=${type}`,
      data,
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getLogos = async type => {
  // 로고 이미지가 저장된 presigned url 리스트를 get
  try {
    const response = await instance.get(`/corporate-logo?type=${type}`);
    return response.data.imageList;
  } catch (error) {
    throw error;
  }
};
