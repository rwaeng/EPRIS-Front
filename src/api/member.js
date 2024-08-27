import { instance, authInstance } from '.';

export const postMember = async data => {
  try {
    const response = await authInstance.post(`/members`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMember = async memberId => {
  try {
    const response = await authInstance.delete(`/members/${memberId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteGeneration = async gen => {
  try {
    const response = await authInstance.delete(`/members?num=${gen}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getMembers = async () => {
  try {
    const response = await instance.get(`/members/byAllNum`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMembersExe = async () => {
  try {
    const response = await instance.get(`/members/executives`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMembersActive = async () => {
  try {
    const response = await instance.get(`/members/isActive`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMembersAlumni = async gen => {
  try {
    const response = await instance.get(`/members/alumni?num=${gen}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
