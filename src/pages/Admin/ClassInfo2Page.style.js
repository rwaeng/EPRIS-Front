import styled from 'styled-components';
import { bold24 } from '../../styles/font';

const S = {
  ClassInfoLayout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
    gap: 5rem;
  `,
  AddCardBtn: styled.div`
    display: flex;
    padding: 1rem 2.5rem 1rem 3.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 5rem;
    border: 0.15rem solid var(--grey300);
    cursor: pointer;
  `,
  BtnText: styled.div`
    color: var(--grey300);
    text-align: center;
    ${bold24}
  `,
  BtnIcon: styled.img`
    width: 2.25rem;
    height: 2.25rem;
  `,
};

export { S };
