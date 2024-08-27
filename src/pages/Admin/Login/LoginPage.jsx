import { S } from './LoginPage.style';
import { useState } from 'react';
import { postLogin } from '../../../api/login';

const LoginPage = () => {
  const adminUrl = process.env.REACT_APP_ADMIN_URL;
  const [password, setPassWord] = useState('');

  const createLogin = async () => {
    try {
      const res = await postLogin(password);
      localStorage.setItem('token', res.accessToken);
      localStorage.setItem('refresh', res.refreshToken);
      window.location.replace(`${adminUrl}/info`);
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      }
    }
  };

  return (
    <S.Layout>
      <S.LogoImg />
      <S.Container>
        <S.AdminTitle>Admin</S.AdminTitle>
        <S.PasswordInput
          type='password'
          value={password}
          onChange={e => setPassWord(e.target.value)}
          onKeyDown={e => e.keyCode === 13 && createLogin()}
        />
      </S.Container>
    </S.Layout>
  );
};

export default LoginPage;
