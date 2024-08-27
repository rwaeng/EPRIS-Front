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

// 프로젝트 수, 수상 횟수 조회
export const getStatsInfo = async () => {
  try {
    const response = await instance.get(`/award`);
    return response;
  } catch (error) {
    throw error;
  }
};

//기수 정보 조회(현 임원진 사진 조회)
export const getClassInfo = async () => {
  try {
    const response = await instance.get(`/class-info`);
    return response;
  } catch (error) {
    throw error;
  }
};

//Greetings 조회
export const getGreetingCards = async () => {
  try {
    const response = await instance.get(`/cards`);
    return response;
  } catch (error) {
    throw error;
  }
};

//모집 정보 조회(공지 문구 조회)
export const getRecruitmentInfo = async () => {
  try {
    const response = await instance.get(`/recruitment`);
    return response;
  } catch (error) {
    throw error;
  }
};
