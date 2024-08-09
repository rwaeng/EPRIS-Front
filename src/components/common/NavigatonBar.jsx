import { useState } from 'react';
import { S } from './NavigatonBar.style';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <S.NavigationBarLayout>
      <S.NavigationBarContainer>
        <S.LogoContainer />
        <S.NavWrapper>
          <S.NavContainer to='/' activeClassName='active'>
            About
          </S.NavContainer>
          <S.NavContainer to='/eprian' activeClassName='active'>
            EPRian
          </S.NavContainer>
          <S.NavContainer to='/activity' activeClassName='active'>
            Activity
          </S.NavContainer>
          <S.NavContainer to='/join' activeClassName='active'>
            Join us
          </S.NavContainer>
          <S.NavContainer to='/recruitment' activeClassName='active'>
            Recruitment
          </S.NavContainer>
          <S.NavContainer to='/contact' activeClassName='active'>
            Contact
          </S.NavContainer>
        </S.NavWrapper>
        <S.MobileNavMenu isMenuOpen={isMenuOpen} onClick={clickMenu} />
      </S.NavigationBarContainer>
      {isMenuOpen && (
        <S.MobileNavWrapper>
          <S.NavContainer to='/' activeClassName='active'>
            About
          </S.NavContainer>
          <S.NavContainer to='/eprian' activeClassName='active'>
            EPRian
          </S.NavContainer>
          <S.NavContainer to='/activity' activeClassName='active'>
            Activity
          </S.NavContainer>
          <S.NavContainer to='/join' activeClassName='active'>
            Join us
          </S.NavContainer>
          <S.NavContainer to='/recruitment' activeClassName='active'>
            Recruitment
          </S.NavContainer>
          <S.NavContainer to='/contact' activeClassName='active'>
            Contact
          </S.NavContainer>
        </S.MobileNavWrapper>
      )}
    </S.NavigationBarLayout>
  );
};

export default NavigationBar;
