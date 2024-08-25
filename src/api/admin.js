import { instance, authInstance } from './index';

// get 예시, axiosInstance 사용
export const getExample = async () => {
  try {
    const response = await instance.get(`/요청 주소`);
    return response;
  } catch (error) {
    throw error;
  }
};

// 관리자 페이지에서 필요한 경우 authInstance 사용
export const putExample = async data => {
  try {
    const response = await authInstance.put(`/요청 주소`, { data });
    return response;
  } catch (error) {
    throw error;
  }
};

//카드 목록 조회
export const getCards = async () => {
  try {
    const response = await instance.get(`cards`);
    return response;
  } catch (error) {
    throw error;
  }
};

//카드 생성 api
export const createCard = async (name, position, introduce, cardImg) => {
  try {
    const data = { name, position, introduce, cardImg };
    const response = await authInstance.post(`/cards`, data);
    return response;
  } catch (error) {
    throw error;
  }
};

//카드 수정 api
export const updateCard = async (
  cardId,
  name,
  position,
  introduce,
  cardImg,
) => {
  const data = { name, position, introduce, cardImg };
  console.log('Request data for updateCard:', data); // 디버깅을 위한 데이터 로그
  try {
    const response = await authInstance.put(`/cards/${cardId}`, data);
    return response;
  } catch (error) {
    console.error(
      'Error updating card:',
      error.response ? error.response.data : error.message,
    );

    throw error;
  }
};

// 카드 삭제
export const deleteCard = async cardId => {
  try {
    await authInstance.delete(`/cards/${cardId}`);
  } catch (error) {
    throw error;
  }
};
