import styled from 'styled-components';
import { bold18, bold24, reg18 } from '../../styles/font';

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 14rem;
  `,
  ClassInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 46.1rem;
    margin: 6rem 0;
    gap: 5rem;
  `,
  InfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `,
  InfoInput: styled.input`
    width: 100%;
    padding: 1rem 2.5rem;
    background: var(--grey500);
    border: none;
    ${reg18};
    color: var(--white);
    box-sizing: border-box;
    &::placeholder {
      color: var(--white);
    }
  `,
  ContactInfoInputContainer: styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  `,

  InformationTypeWrapper: styled.div`
    ${bold24}
    color: var(--white);
  `,

  PersonalInfoTypeContainer: styled.div`
    display: flex;
    justify-content: row;
  `,
  PersonalInfoTypeWrapper: styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 10rem;
    ${bold18}
    color: var(--white);
  `,
};

export { S };
