import { S, M } from './NavigatonBar.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationBar = ({ type }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.Layout>
      {type === 'admin' ? (
        <S.Container>
          <S.LogoImg onClick={() => navigate('/')} />
          <S.NavContainer>
            <S.NavLink to='/admin/info' activeClassName='active'>
              기본정보
            </S.NavLink>
            <S.NavLink to='/admin/eprians' activeClassName='active'>
              EPRians
            </S.NavLink>
            <S.NavLink to='/admin/activities' activeClassName='active'>
              Activities
            </S.NavLink>
            <S.NavLink to='/admin/recruitment' activeClassName='active'>
              Recruitment
            </S.NavLink>
          </S.NavContainer>
        </S.Container>
      ) : (
        <S.Container>
          <S.LogoImg onClick={() => navigate('/')} />
          <S.NavContainer>
            <S.NavLink to='/about' activeClassName='active'>
              About
            </S.NavLink>
            <S.NavLink to='/eprians' activeClassName='active'>
              EPRians
            </S.NavLink>
            <S.NavLink to='/activities' activeClassName='active'>
              Activities
            </S.NavLink>
            <S.NavLink to='/joinus' activeClassName='active'>
              Join us
            </S.NavLink>
            <S.NavLink to='/contact' activeClassName='active'>
              Contact
            </S.NavLink>
          </S.NavContainer>
          <M.NavMenu $isMenuOpen={isMenuOpen} onClick={clickMenu} />
        </S.Container>
      )}
      {isMenuOpen && (
        <M.NavContainer>
          <S.NavLink to='/about' activeClassName='active'>
            About
          </S.NavLink>
          <S.NavLink to='/eprians' activeClassName='active'>
            EPRians
          </S.NavLink>
          <S.NavLink to='/activities' activeClassName='active'>
            Activities
          </S.NavLink>
          <S.NavLink to='/joinus' activeClassName='active'>
            Join us
          </S.NavLink>
          <S.NavLink to='/contact' activeClassName='active'>
            Contact
          </S.NavLink>
        </M.NavContainer>
      )}
    </S.Layout>
  );
};
export default NavigationBar;
