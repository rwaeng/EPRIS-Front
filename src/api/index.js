import axios from 'axios';
import { getAccessToken } from './login';

const instance = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` });

const getToken = localStorage.getItem('token');
const token = getToken ? `Bearer ${getToken}` : null;

const authInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: { Authorization: token },
  withCredentials: true,
});

authInstance.interceptors.response.use(
  response => response,
  async error => {
    const { config, response } = error;
    if (!response) return Promise.reject(error);
    const { status, data } = response;

    if (status == 401) {
      if (data.message === '만료된 토큰입니다.') {
        try {
          const res = await getAccessToken();
          if (res) {
            localStorage.setItem('token', res.accessToken);
            config.headers['Authorization'] = `Bearer ${res.accessToken}`;
            authInstance.defaults.headers.common.Authorization = `Bearer ${res.accessToken}`;
            // 실패한 요청 다시 시도
            return authInstance(config);
          }
        } catch (e) {
          console.error(e);
          localStorage.removeItem('token');
          localStorage.removeItem('refresh');
          window.location.replace('/admin');
          alert('로그인 유효기간이 만료 되었습니다. 다시 로그인해주세요.');
        }
      }
    }

    return Promise.reject(error);
  },
);

export { instance, authInstance };
