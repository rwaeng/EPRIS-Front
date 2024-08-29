import { S, M } from './NavigatonBar.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postLogout } from '../../../api/login';

const NavigationBar = ({ type }) => {
  const adminUrl = process.env.REACT_APP_ADMIN_URL;
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
    <S.Layout>
      {type === 'admin' ? (
        <S.Container>
          <S.LogoImg onClick={handleClickAdminLogo} alt='epris-logo' />
          <S.NavContainer>
            <S.NavLink to={`${adminUrl}/info`} activeclassname='active'>
              기본정보
            </S.NavLink>
            <S.NavLink to={`${adminUrl}/eprians`} activeclassname='active'>
              EPRians
            </S.NavLink>
            <S.NavLink to={`${adminUrl}/activities`} activeclassname='active'>
              Activities
            </S.NavLink>
            <S.NavLink to={`${adminUrl}/recruitment`} activeclassname='active'>
              Recruitment
            </S.NavLink>
          </S.NavContainer>
        </S.Container>
      ) : (
        <S.Container>
          <S.LogoImg onClick={() => navigate('/')} alt='epris-logo' />
          <S.NavContainer>
            <S.NavLink to='/about' activeclassname='active'>
              About
            </S.NavLink>
            <S.NavLink to='/eprians' activeclassname='active'>
              EPRians
            </S.NavLink>
            <S.NavLink to='/activities' activeclassname='active'>
              Activities
            </S.NavLink>
            <S.NavLink to='/joinus' activeclassname='active'>
              Join us
            </S.NavLink>
            <S.NavLink to='/contact' activeclassname='active'>
              Contact
            </S.NavLink>
          </S.NavContainer>
          <M.NavMenu $isMenuOpen={isMenuOpen} onClick={clickMenu} />
        </S.Container>
      )}
      {isMenuOpen && (
        <M.NavContainer>
          <S.NavLink to='/about' activeclassname='active'>
            About
          </S.NavLink>
          <S.NavLink to='/eprians' activeclassname='active'>
            EPRians
          </S.NavLink>
          <S.NavLink to='/activities' activeclassname='active'>
            Activities
          </S.NavLink>
          <S.NavLink to='/joinus' activeclassname='active'>
            Join us
          </S.NavLink>
          <S.NavLink to='/contact' activeclassname='active'>
            Contact
          </S.NavLink>
        </M.NavContainer>
      )}
    </S.Layout>
  );
};
export default NavigationBar;
