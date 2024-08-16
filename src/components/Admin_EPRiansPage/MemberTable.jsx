import { useState } from 'react';
import { S } from './MemberTable.style';
import plusIcon from '../../assets/Admin_EPRiansPage/ps-mini.svg';
import addRowIcon from '../../assets/Admin_EPRiansPage/ps-row.svg';
import deleteRowIcon from '../../assets/Admin_EPRiansPage/ms.svg';

const MemberTable = ({ memberNum, handleDeleteMembers }) => {
  const [rows, setRows] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

  const handleAddRow = () => {
    setRows([...rows, { id: rows.length + 1 }]);
  };
  const handleDeleteRow = id => {
    if (rows.length > 1) {
      setRows(rows.filter(row => row.id !== id));
    }
  };

  return (
    <S.Container>
      <S.MemberNum>{`Members ${memberNum}`}</S.MemberNum>
      <S.GenInput type='text' placeholder='기수' />
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
          {rows.map(row => (
            <tr key={row.id}>
              <S.Td $left='0'>
                <S.TInput type='text' placeholder='이름' />
              </S.Td>
              <S.Td>
                <S.TInput type='text' placeholder='직위' />
              </S.Td>
              <S.Td>
                <S.TInput type='text' placeholder='학번 및 소속' />
              </S.Td>
              <S.Td $right='1.75rem solid var(--black)'>
                <S.TFileInput htmlFor='file-input'>
                  <img src={plusIcon} />
                  <div>사진 업로드</div>
                </S.TFileInput>
                <input
                  type='file'
                  id='file-input'
                  style={{ display: 'none' }}
                />
              </S.Td>
              <S.Td $right='none'>
                <S.TdContainer>
                  <S.Checkbox type='checkbox' />

                  <S.DeleteButton
                    onClick={() => {
                      handleDeleteRow(row.id);
                    }}
                  >
                    제거
                  </S.DeleteButton>
                </S.TdContainer>
              </S.Td>
              <td>
                <S.SaveButton>저장</S.SaveButton>
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
      <S.ButtonTab>
        <S.RowButton onClick={() => handleDeleteMembers(memberNum)}>
          <div>삭제</div>
          <img src={deleteRowIcon} />
        </S.RowButton>
        <S.RowButton onClick={handleAddRow}>
          <div>열 추가하기</div>
          <img src={addRowIcon} />
        </S.RowButton>
      </S.ButtonTab>
    </S.Container>
  );
};

export default MemberTable;
