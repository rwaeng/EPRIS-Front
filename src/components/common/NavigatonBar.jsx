import { useState } from 'react';
import { S, M } from './NavigatonBar.style';
import { useNavigate } from 'react-router-dom';
const NavigationBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const clickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <S.Layout>
      <S.Container>
        <S.LogoImg onClick={() => navigate('/')} />
        <S.NavContainer>
          <S.NavLinkWrapper to='/' activeClassName='active'>
            About
          </S.NavLinkWrapper>
          <S.NavLinkWrapper to='/eprians' activeClassName='active'>
            EPRians
          </S.NavLinkWrapper>
          <S.NavLinkWrapper to='/activities' activeClassName='active'>
            Activities
          </S.NavLinkWrapper>
          <S.NavLinkWrapper to='/join' activeClassName='active'>
            Join us
          </S.NavLinkWrapper>
          <S.NavLinkWrapper to='/recruitment' activeClassName='active'>
            Recruitment
          </S.NavLinkWrapper>
          <S.NavLinkWrapper to='/contact' activeClassName='active'>
            Contact
          </S.NavLinkWrapper>
        </S.NavContainer>
        <M.NavMenu $isMenuOpen={isMenuOpen} onClick={clickMenu} />
      </S.Container>
      {isMenuOpen && (
        <M.NavContainer>
          <S.NavLinkWrapper to='/' activeClassName='active'>
            About
          </S.NavLinkWrapper>
          <S.NavLinkWrapper to='/eprians' activeClassName='active'>
            EPRians
          </S.NavLinkWrapper>
          <S.NavLinkWrapper to='/activities' activeClassName='active'>
            Activities
          </S.NavLinkWrapper>
          <S.NavLinkWrapper to='/join' activeClassName='active'>
            Join us
          </S.NavLinkWrapper>
          <S.NavLinkWrapper to='/recruitment' activeClassName='active'>
            Recruitment
          </S.NavLinkWrapper>
          <S.NavLinkWrapper to='/contact' activeClassName='active'>
            Contact
          </S.NavLinkWrapper>
        </M.NavContainer>
      )}
    </S.Layout>
  );
};
export default NavigationBar;
