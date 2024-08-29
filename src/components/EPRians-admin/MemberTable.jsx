import { useEffect, useState } from 'react';
import { S } from './MemberTable.style';

import addRowIcon from '../../assets/Admin_EPRiansPage/ps-row.svg';
import deleteRowIcon from '../../assets/Admin_EPRiansPage/ms.svg';

import TableRow from './TableRow';

const MemberTable = ({
  info,
  memberNum,
  handleDeleteTable,
  addId,
  setAddId,
}) => {
  const [memberList, setMemberList] = useState(info.memberList);
  const [memberGen, setMemberGen] = useState(info.num);

  useEffect(() => {
    if (memberGen < 1) {
      setMemberGen('');
    }
  }, []);

  const handleAddRow = () => {
    setMemberList([
      ...memberList,
      {
        num: memberGen,
        memberId: addId,
        name: '',
        position: '',
        memberInfo: '',
        profileUrl: '',
        isActive: true,
      },
    ]);
    setAddId(prev => prev - 1);
  };

  const handleChangeText = e => {
    const { value } = e.target;
    setMemberGen(value);
  };

  return (
    <S.Container>
      <S.MemberNum>{`Members ${memberNum}`}</S.MemberNum>
      <S.GenInput
        type='text'
        placeholder='기수 (ex. 37th)'
        value={memberGen}
        onChange={handleChangeText}
      />
      <S.Table>
        <thead>
          <tr>
            <S.Th $width='10.25rem'>이름</S.Th>
            <S.Th $width='10.25rem'>직위</S.Th>
            <S.Th $width='15.375rem'>학번 및 소속</S.Th>
            <S.Th
              $width='9.8125rem'
              $border='1.75rem solid var(--black)'
              $gap='1.75rem'
            >
              사진
            </S.Th>
            <S.Th $width='7.5rem' $border='none'>
              활동여부
            </S.Th>
            <S.Th $width='4.8125rem' $border='none' $color='transparent'></S.Th>
          </tr>
        </thead>
        <tbody>
          {memberList.map(mem => (
            <TableRow
              key={mem.memberId}
              mem={mem}
              setMemberList={setMemberList}
              num={memberGen}
            />
          ))}
        </tbody>
      </S.Table>
      <S.ButtonTab>
        <S.RowButton onClick={() => handleDeleteTable(memberGen, info.num)}>
          <div>삭제</div>
          <img src={deleteRowIcon} alt='delete' />
        </S.RowButton>
        <S.RowButton onClick={handleAddRow}>
          <div>행 추가하기</div>
          <img src={addRowIcon} alt='add' />
        </S.RowButton>
      </S.ButtonTab>
    </S.Container>
  );
};

export default MemberTable;
