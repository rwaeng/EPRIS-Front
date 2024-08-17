import styled from 'styled-components';
import { bold24, bold18, reg18 } from '../../styles/font';

const S = {
  CardLayout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 737px;
    gap: 24px;
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
    width: 60px;

    padding: var(--micro, 8px) 20px;
    gap: 4px;

    cursor: pointer;
  `,
  DeleteText: styled.div`
    color: var(--grey100, #cfd1da);
    text-align: center;
    ${bold18}
  `,
  DeleteImg: styled.img`
    width: var(--xs, 24px);
    height: var(--xs, 24px);
  `,
  BtnWrapper: styled.div`
    width: 162px;
    height: 64px;
  `,
};

export { S };
