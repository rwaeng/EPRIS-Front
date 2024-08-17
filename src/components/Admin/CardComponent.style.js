import styled from 'styled-components';
import { bold24, bold18, reg18 } from '../../styles/font';

const S = {
  CardLayout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 46.0625rem;
    gap: 1.5rem;
  `,
  CardText: styled.div`
    align-self: flex-start;
    color: var(--white, #f7f8fc);
    ${bold24};
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
      color: var(--grey100);
    }
  `,
  DeleteContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.75rem;

    padding: var(--micro, 0.5rem) 1.25rem;
    gap: 0.25rem;

    cursor: pointer;
  `,
  DeleteText: styled.div`
    color: var(--grey100, #cfd1da);
    text-align: center;
    ${bold18}
  `,
  DeleteImg: styled.img`
    width: var(--xs, 1.5rem);
    height: var(--xs, 1.5rem);
  `,
  BtnWrapper: styled.div`
    width: 10.125rem;
    height: 4rem;
  `,
};

export { S };
