import { useState } from 'react';

import NavigationBar from '../../components/common/NavigatonBar';
import InbAdmin from '../../components/common/InbAdmin';
import { UploadComponent } from '../../components/common/UploadComponent/UploadComponent';
import {
  TextButton,
  TextIconButton,
} from '../../components/common/CommonButtons/CommonButtons';
import { S } from './EPRiansPage.style';

import plusIcon from '../../assets/Admin_EPRiansPage/ps.svg';
import MemberTable from '../../components/Admin_EPRiansPage/MemberTable';

const EPRiansPage = () => {
  const menuList = ['Members', 'Alumni Brands'];
  const [clicked, setClicked] = useState(menuList[0]);

  //Members
  const [members, setMembers] = useState([{ id: 1 }]);

  const handleAddMembers = () => {
    setMembers([...members, { id: members.length + 1 }]);
  };

  const handleDeleteMembers = id => {
    if (members.length > 1) {
      const updatedMembers = members.filter(mem => mem.id !== id);
      const reindexedMembers = updatedMembers.map((mem, index) => ({
        ...mem,
        id: index + 1,
      }));
      setMembers(reindexedMembers);
    }
  };

  //Alumni Brands
  const [isLogoChanged, setIsLogoChanged] = useState(false);

  return (
    <S.Container>
      <NavigationBar type='admin' />
      <InbAdmin menuList={menuList} clicked={clicked} setClicked={setClicked} />
      {clicked === menuList[0] ? (
        <S.MembersContainer>
          {members.map(mem => (
            <MemberTable
              key={mem.id}
              memberNum={mem.id}
              handleDeleteMembers={handleDeleteMembers}
            />
          ))}

          <S.WarningText>
            직위에 공백, 오탈자 없이 정확한 값 (학회장, 기획부장, 운영부장,
            홍보부장, 기획부, 운영부, 홍보부 중 하나)을 입력해주세요.
          </S.WarningText>
          <TextIconButton
            text='기수 추가하기'
            icon={plusIcon}
            bgColor='inherit'
            color='var(--grey300)'
            border='2.4px solid var(--grey300);'
            onClick={handleAddMembers}
          />
        </S.MembersContainer>
      ) : (
        <S.AlumniBrandsContainer>
          <S.Title>Corporate Logo</S.Title>
          <S.UploadComponentWrapper>
            <UploadComponent imageNum={null} ratio='5:3' />
          </S.UploadComponentWrapper>
          <TextButton
            text='저장'
            isActive={isLogoChanged}
            disabled={!isLogoChanged}
          />
        </S.AlumniBrandsContainer>
      )}
    </S.Container>
  );
};

export default EPRiansPage;
