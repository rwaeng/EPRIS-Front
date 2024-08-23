import { NavLink } from 'react-router-dom';
import { S } from './LoginPage.style';

const LoginPage = () => {
  return (
    <S.Layout>
      <S.LogoImg />
      <S.Container>
        <S.AdminTitle>Admin</S.AdminTitle>
        <S.PasswordInput type='password' />
      </S.Container>
    </S.Layout>
  );
};

export default LoginPage;
