import styled from 'styled-components';
import * as font from '../../styles/font';

export const S = {};

S.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 14.93206rem;
  height: 11.75rem;
  box-sizing: border-box;
  padding: 2.5rem;
  border-radius: 1rem;
  background-color: var(--grey500);
`;

S.Arrow = styled.div`
  width: 0;
  height: 0;
  border-bottom: 1.7rem solid transparent;
  border-top: 1.7rem solid transparent;
  border-left: 1.7rem solid var(--grey500);
  border-right: 1.7rem solid transparent;
`;

S.Title = styled.div`
  align-self: flex-start;
  ${font.bold24}
  color: var(--white);
`;

S.Desc = styled.div`
  ${font.reg18}
  color: var(--grey300);

  margin-left: 1.68rem;
  white-space: pre-wrap;
`;
