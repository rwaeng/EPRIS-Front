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

  .plus-area {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .plus {
    margin-right: 1rem;
    width: 1.5rem;
    height: 1.5rem;

    stroke: var(--white);
    cursor: pointer;
  }

  .upload-text {
    margin-right: 1.5rem;
    color: var(--white);
    ${font.reg18}
  }

  .ratio {
    margin-right: 2rem;
    color: var(--grey300);
    ${font.reg18}
  }

  .file-name {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: end;

    ${font.reg18}
    color: var(--grey300);
  }
`;

S.ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 11.25rem;
  padding: 1rem 2.5rem;
  border-top: 1px solid var(--grey300);
`;

S.ImagePreview = styled.div`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  position: relative;
  width: 9.25rem;
  height: 9.25rem;
  background-color: var(--grey300);

  .xbox {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
