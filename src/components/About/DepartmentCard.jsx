import React from 'react';
import { S } from '../../pages/About/AboutPage.style';
import {
  DepartmentCardContent,
  departmentData,
} from '../../components/About/CardContent';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

export const DepartmentCard = () => {
  const animation1 = useScrollFadeIn();
  const animation2 = useScrollFadeIn();
  const animation3 = useScrollFadeIn();

  return (
    <S.Container>
      <div
        ref={animation1.ref}
        style={{ ...animation1.style, height: '19.8125rem' }}
      >
        <S.Triangle $marginLeft={departmentData[0].marginLeft} />
        <DepartmentCardContent
          $marginLeft={departmentData[0].marginLeft}
          depname={departmentData[0].depname}
          description={departmentData[0].description}
          depdetails={departmentData[0].depdetails}
        />
      </div>

      <div
        ref={animation2.ref}
        style={{ ...animation2.style, height: '19.8125rem' }}
      >
        <S.Triangle $marginLeft={departmentData[1].marginLeft} />
        <DepartmentCardContent
          marginLeft={departmentData[1].marginLeft}
          depname={departmentData[1].depname}
          description={departmentData[1].description}
          depdetails={departmentData[1].depdetails}
        />
      </div>

      <div
        ref={animation3.ref}
        style={{ ...animation3.style, height: '19.8125rem' }}
      >
        <S.Triangle $marginLeft={departmentData[2].marginLeft} />
        <DepartmentCardContent
          marginLeft={departmentData[2].marginLeft}
          depname={departmentData[2].depname}
          description={departmentData[2].description}
          depdetails={departmentData[2].depdetails}
        />
      </div>
    </S.Container>
  );
};
