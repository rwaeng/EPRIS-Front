import styled from 'styled-components';
import * as font from '../../../styles/font';

export const S = {};

S.Container = styled.div`
  width: 46.0625rem;
  background-color: var(--grey500);
`;

S.Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2.5rem;
`;

S.PlusArea = styled.label`
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

S.Title = styled.div`
  margin-right: 1.5rem;
  color: var(--white);
  ${font.reg18}
`;

S.Ratio = styled.div`
  margin-right: 2rem;
  color: var(--grey300);
  ${font.reg18}
`;

S.FileName = styled.div`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: end;

  ${font.reg18}
  color: var(--grey300);
`;

S.ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  justify-content: center;
  row-gap: 1rem;

  box-sizing: border-box;
  min-height: 11.313rem;
  padding: 1rem 2.5rem;
  border-top: 1px solid var(--grey300);
`;

S.ImagePreview = styled.div`
  position: relative;
  width: 9.25rem;
  height: 9.25rem;
  background-color: var(--grey300);
`;

S.XboxIcon = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

S.ImageBox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
