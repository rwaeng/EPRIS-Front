import styled from 'styled-components';
import toggleOff from '../../assets/Admin_EPRiansPage/toggle-off.svg';
import toggleOn from '../../assets/Admin_EPRiansPage/toggle-on.svg';

export const S = {};

S.Container = styled.div`
  display: flex;
  align-items: center;
`;

S.HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

S.StyledCheckbox = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;

  cursor: pointer;

  background-image: ${({ checked }) =>
    checked ? `url(${toggleOn})` : `url(${toggleOff})`};
  background-size: cover;
`;
