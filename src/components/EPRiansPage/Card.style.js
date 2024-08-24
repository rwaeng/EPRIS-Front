import styled from 'styled-components';
import * as font from '../../styles/font';

export const S = {};

S.Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16.1875rem;
  padding: 1.25rem 1.25rem 2.5rem 1.25rem;
  gap: 1.25rem;

  background-color: ${props => props.$bgColor || 'var(--grey500)'};
  border-radius: 1rem;
  box-shadow: ${props =>
    props.$shadow && '0px 0px 32px 0px rgba(130, 130, 143, 0.1);'};
  box-sizing: border-box;
`;

S.CardImage = styled.img`
  width: 13.6875rem;
  height: 13.6875rem;
  border-radius: 0.5rem;

  object-fit: contain;
  background: lightgray 50%;
`;

S.CardRole = styled.div`
  ${font.reg18}
  color: ${props => props.$color || 'var(--grey300)'}
`;

S.CardName = styled.div`
  ${font.bold18}
  color: ${props => props.$color || 'var(--white)'}
`;

S.CardInfo = styled.div`
  ${font.reg14}
  color: var(--grey300);
`;
