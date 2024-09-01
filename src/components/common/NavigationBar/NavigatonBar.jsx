import { S, M } from './NavigatonBar.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postLogout } from '../../../api/login';

const NavigationBar = ({ type }) => {
  const adminUrl = process.env.REACT_APP_ADMIN_URL;
  const adminMenu = [
    { name: '기본정보', to: `${adminUrl}/info` },
    { name: 'EPRians', to: `${adminUrl}/eprians` },
    { name: 'Activities', to: `${adminUrl}/activities` },
    { name: 'Recruitment', to: `${adminUrl}/recruitment` },
  ];
  const menu = [
    { name: 'About', to: `/about` },
    { name: 'EPRians', to: `/eprians` },
    { name: 'Activities', to: `/activities` },
    { name: 'Join us', to: `/joinus` },
    { name: 'Contact', to: `/contact` },
  ];
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickAdminLogo = async () => {
    try {
      const res = await postLogout();
      if (res) {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
        navigate('/', { replace: true });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <S.Layout isMenuOpen={isMenuOpen}>
      <S.Container>
        <S.LogoImg
          onClick={
            type === 'admin' ? handleClickAdminLogo : () => navigate('/')
          }
          alt='epris-logo'
        />
        <S.NavContainer>
          {(type === 'admin' ? adminMenu : menu).map(it => (
            <S.NavLink to={it.to} activeclassname='active'>
              {it.name}
            </S.NavLink>
          ))}
        </S.NavContainer>
        <M.NavMenu $isMenuOpen={isMenuOpen} onClick={clickMenu} />
      </S.Container>
      {isMenuOpen && (
        <M.NavContainer>
          {(type === 'admin' ? adminMenu : menu).map(it => (
            <S.NavLink to={it.to} activeclassname='active'>
              {it.name}
            </S.NavLink>
          ))}
        </M.NavContainer>
      )}
    </S.Layout>
  );
};
export default NavigationBar;
