import { styled, css } from 'styled-components';
import { bold18, bold24, reg18 } from '../../styles/font';
import { flexCenter } from '../../styles/common';

const inputCommonStyle = css`
  width: calc(100% - 5rem);
  padding: 1rem 2.5rem;

  border: 0;
  background-color: var(--grey500);

  ${reg18}
  color: var(--white);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--white);
  }
`;
const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  `,
  Form: styled.form`
    ${flexCenter}
    flex-direction: column;
    gap: 1.5rem;

    width: 46.0625rem;
  `,
  H2: styled.h2`
    width: 100%;

    ${bold24}
    color: var(--white);
  `,
  Fieldset: styled.fieldset`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    border: 0;
  `,
  Label: styled.label`
    ${bold18}
    color: var(--white);
  `,
  Input: styled.input`
    ${inputCommonStyle}
  `,
  FixedInput: styled.input`
    ${inputCommonStyle}

    width: 32.5rem;
  `,
  Textarea: styled.textarea`
    ${inputCommonStyle}

    resize: none;
    white-space: pre-line;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
  Button: styled.button`
    ${flexCenter}
    gap: 0.25rem;

    padding: 0.5rem 1.25rem;

    background-color: transparent;

    ${bold18}
    color: var(--grey100);
  `,
};

export { S };
