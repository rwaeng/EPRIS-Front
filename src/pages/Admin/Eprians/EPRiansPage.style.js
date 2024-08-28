import styled from 'styled-components';
import * as font from '../../../styles/font';

export const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

S.Title = styled.div`
  ${font.bold24}
  color: var(--white);

  width: 46.0625rem;
  margin-bottom: 1.5rem;
`;

S.MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 58rem;
  margin-top: 7.5rem;
  margin-bottom: 7.5rem;
  gap: 5rem;
`;

S.WarningText = styled.div`
  ${font.reg18}
  color: var(--grey100);
`;

S.AlumniBrandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  margin-top: 7.5rem;
  margin-bottom: 7.5rem;
`;

S.UploadComponentWrapper = styled.div`
  margin-bottom: 5rem;
`;
