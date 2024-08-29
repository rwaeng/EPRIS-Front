import styled from 'styled-components';
import { reg18 } from '../../../styles/font';
import { flexCenter } from '../../../styles/common';

const S = {
  Layout: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;

    width: 100%;
    max-width: 1120px;
    padding: 0.5rem 10rem;

    border-top: 1px solid var(--grey300);
  `,
  Button: styled.button`
    ${flexCenter}

    padding: 12px;

    background-color: transparent;

    ${reg18}
    color: ${({ $isActive }) => ($isActive ? 'var(--red)' : 'var(--grey100)')};
  `,
};

export { S };
