import styled from 'styled-components';
import { bold18, m_bold18, m_reg18, reg18 } from '../../styles/font';

const Container = styled.div`
  display: flex;

  width: 31.625rem;
  padding: 1.25rem;

  border-radius: 1rem;

  color: var(--white);

  @media screen and (max-width: 749px) {
    width: auto;
  }
  @media screen and (min-width: 750px) and (max-width: 1279px) {
    width: 41.875rem;
  }
`;

const S = {
  ProjectContainer: styled(Container)`
    flex-direction: column;
    gap: 1rem;

    background-color: var(--grey500);

    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
  `,
  AwardContainer: styled(Container)`
    background-color: #e3e6f0;
    color: var(--black);
  `,
  YearWrapper: styled.span`
    ${bold18}
    color: ${({ $isRed }) => ($isRed ? 'var(--red)' : 'var(--white)')};

    @media screen and (max-width: 1279px) {
      ${m_bold18}
    }
  `,
  InfoWrapper: styled.p`
    ${reg18}
    white-space: pre-line;

    @media screen and (max-width: 1279px) {
      ${m_reg18}
    }
  `,
};

export { S };
