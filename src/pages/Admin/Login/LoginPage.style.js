import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../assets/logo/Logo.svg';
import { bold18, bold24 } from '../../../styles/font';

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5.5rem;
    min-height: 100vh;
  `,
  LogoImg: styled(Logo)`
    width: 450px;
    height: auto;
    cursor: pointer;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  `,

  AdminTitle: styled.div`
    ${bold24}
    color: var(--white);
  `,
  PasswordInput: styled.input.attrs({
    placeholder: 'Password',
  })`
    width: 29.125rem;
    border: none;
    padding: 1.25rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    ${bold18}
    background-color: var(--grey500);
    color: var(--white);
    &::placeholder {
      color: var(--white);
    }
  `,
};

export { S };
