import { S } from './ActivityPage.style';
import { useState } from 'react';
import InbAdmin from '../../components/common/InbAdmin';
import ProjectList from '../../components/activities-admin/ProjectList';
import AwardStatistics from '../../components/activities-admin/AwardStatistics';
import SessionList from '../../components/activities-admin/SessionList';
import CorporateProject from '../../components/activities-admin/CorporateProject';
import Network from '../../components/activities-admin/Network';

const ActivityPage = () => {
  const menuList = [
    'Project List',
    'Award & Statistics',
    'Session',
    'Corporate Project',
    'Network',
  ];
  const [clicked, setClicked] = useState(menuList[0]);

  const SubPage = () => {
    switch (clicked) {
      case 'Project List':
        return <ProjectList />;
      case 'Award & Statistics':
        return <AwardStatistics />;
      case 'Session':
        return <SessionList />;
      case 'Corporate Project':
        return <CorporateProject />;
      case 'Network':
        return <Network />;
      default:
        return <ProjectList />;
    }
  };

  return (
    <S.Layout>
      <InbAdmin menuList={menuList} clicked={clicked} setClicked={setClicked} />
      <S.Container>
        <SubPage />
      </S.Container>
    </S.Layout>
  );
};

export default ActivityPage;
