import { authInstance, instance } from './index';

export const getProject = async () => {
  try {
    const response = await instance.get(`/projects`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postProject = async (year, info) => {
  try {
    const response = await authInstance.post('/projects', {
      year: year,
      info: info,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putProject = async (projectID, year, info) => {
  try {
    const response = await authInstance.put(`/projects/${projectID}`, {
      year: year,
      info: info,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async projectId => {
  try {
    const response = await authInstance.delete(`/projects/${projectId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
