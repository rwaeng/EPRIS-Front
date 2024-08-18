import styled from 'styled-components';
import * as font from '../../styles/font';

export const S = {};

S.Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

S.Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 46.0625rem;

  margin-top: 11.88rem;
  margin-bottom: 7.5rem;
  gap: 5rem;
`;

S.UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  gap: 1.5rem;
`;

S.Title = styled.div`
  ${font.bold24}
  color: var(--white);
`;

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
`;

S.NoticeInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 2.5rem;
  ${font.reg18}
  color: var(--white);
  background-color: var(--grey500);
  border: 0;
`;

S.TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
`;

S.ProcessContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`;

S.Process = styled.div`
  ${font.bold18}
  color: var(--white);
`;

S.ProcessInput = styled.textarea`
  width: 37.5rem;
  box-sizing: border-box;
  padding: 1rem 2.5rem;
  background-color: var(--grey500);
  border: 0;

  ${font.reg18}
  color: var(--white);
  resize: none;
`;
