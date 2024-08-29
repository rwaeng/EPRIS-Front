import styled from 'styled-components';
import * as font from '../../styles/font';

export const S = {};

S.FileUpload = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

S.UploadHeader = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem 2.5rem;

  background-color: var(--grey500);
`;

S.InputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.Icon = styled.img`
  margin-right: 1rem;
  width: 1.5rem;
  height: 1.5rem;

  stroke: var(--white);
  cursor: pointer;
`;

S.UploadText = styled.div`
  margin-right: 1.5rem;
  color: var(--white);
  ${font.reg18}
`;

S.FileName = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 2.5rem;
  ${font.reg18}
  color: var(--grey300);
  background-color: var(--grey500);
  border-top: 1px solid var(--grey300);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
