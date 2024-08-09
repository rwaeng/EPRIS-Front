import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo/Logo.svg';
import { ReactComponent as NavMobile } from '../../assets/NavBar/MobileNavMenu.svg';
import { ReactComponent as NavMobileX } from '../../assets/NavBar/x.svg';

const S = {
  NavigationBarLayout: styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1.5vh;
    padding-bottom: 0.9vw;
  `,
  NavigationBarContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 749px) {
      padding: 1rem;
      flex-direction: row;
      justify-content: space-between;
    }

    @media (min-width: 750px) and (max-width: 1279px) {
      padding: 0 5vw;
    }

    @media (min-width: 1440px) {
      padding: 0 10vw;
    }
  `,
  LogoContainer: styled(Logo)`
    margin-left: 9vw;
    @media (min-width: 750px) and (max-width: 1279px) {
      margin-right: 5vw;
    }

    @media (max-width: 749px) {
      margin-left: 1rem;
    }
    @media (min-width: 1440px) {
      margin-left: 0;
    }
  `,
  NavWrapper: styled.div`
    display: flex;
    align-items: center;
    margin-right: 9vw;

    @media (max-width: 375px) {
      display: none;
    }
  `,
  NavContainer: styled(NavLink)`
    padding-left: 0.8vw;
    padding-right: 0.8vw;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Pretendard', sans-serif;
    color: white;
    text-decoration: none;
    cursor: pointer;
    &.active {
      color: red;
    }

    @media (max-width: 375px) {
      font-size: 1rem;
    }

    :hover {
      color: red;
    }
  `,

  MobileNavMenu: styled(NavMobile).attrs(props => ({
    as: props.isMenuOpen ? NavMobileX : NavMobile,
  }))`
    display: none;
    width: 2rem;
    height: 2rem;
    margin-left: 5vw;
    cursor: pointer;

    @media (max-width: 375px) {
      display: block;
    }
  `,

  MobileNavWrapper: styled.div`
    display: none;

    @media (max-width: 375px) {
      display: block;
      display: flex;
      flex-direction: column;

      align-items: start;
      margin-left: 9vw;
      margin-top: 3vw;

      gap: 3vw;
    }
  `,
};

export { S };
