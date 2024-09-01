import { useEffect, useState } from 'react';
import { S } from './MemberTable.style';
import { postPresignedURL, putPresignedURL } from '../../api/fileUpload';

import CustomCheckbox from './CustomCheckbox';
import plusIcon from '../../assets/Admin_EPRiansPage/ps-mini.svg';
import { deleteMember, postMember } from '../../api/member';

const TableRow = ({ mem, setMemberList, num }) => {
  const [member, setMember] = useState(mem);
  const [isUpdated, setIsUpdated] = useState(false);
  const [imgFile, setImgFile] = useState(null);
  const [fileName, setFileName] = useState(mem.profileUrl);

  useEffect(() => {
    // num이 변경될 때마다 member의 num 필드 업데이트
    setMember(prev => ({ ...prev, num }));
  }, [num]);

  useEffect(() => {
    // member의 상태가 변경될 때 isUpdated 상태를 업데이트
    if (isObjEqual(mem, member)) {
      setIsUpdated(false);
    } else {
      setIsUpdated(true);
    }
  }, [member]);

  const handleCheckbox = () => {
    setMember({ ...member, isActive: !member.isActive });
    setIsUpdated(true);
  };

  const handleChangeText = e => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const isObjEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  };

  const handleDeleteRow = async id => {
    try {
      const userConfirmed = window.confirm('정말 삭제하시겠습니까?');
      if (userConfirmed) {
        if (id > 0) {
          const res = await deleteMember(id);
          if (res.status === 200) {
            alert('삭제되었습니다.');
            setMemberList(prev =>
              prev.filter(member => member.memberId !== id),
            );
          } else {
            alert('저장하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
          }
        } else {
          setMemberList(prev => prev.filter(member => member.memberId !== id));
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleImgUpload = e => {
    const currentImage = e.target.files[0];
    setImgFile(currentImage);
    setFileName(currentImage.name);
    setIsUpdated(true);
  };

  const getPresignedURL = async file => {
    try {
      const res = await postPresignedURL(file);
      await putPresignedURL(res.data, file);

      const url = res.data.split('?')[0];
      return url;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveButton = async () => {
    try {
      const updatedMember = { ...member };
      if (imgFile) {
        const imgUrl = await getPresignedURL(imgFile);
        updatedMember.profileUrl = imgUrl;
      }

      if (updatedMember.memberId > 0) {
        updatedMember.isNew = false;
      } else {
        updatedMember.isNew = true;
        updatedMember.memberId = 0;
      }

      if (
        !updatedMember.name ||
        !updatedMember.position ||
        !updatedMember.memberInfo ||
        !updatedMember.profileUrl
      ) {
        alert('모든 항목을 입력해주세요.');
        return;
      }

      const res = await postMember(updatedMember);
      const newId = res.data.memberId;

      if (res.status === 200) {
        alert('저장되었습니다.');
        updatedMember.memberId = newId;

        setMemberList(prev =>
          prev.map(mem =>
            mem.memberId === member.memberId ? updatedMember : mem,
          ),
        );

        setIsUpdated(false);
      } else {
        alert('저장하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (err) {
      console.error(err);
      alert('저장하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <tr>
      <S.Td $left='0'>
        <S.TInput
          type='text'
          placeholder='이름'
          name='name'
          value={member.name}
          onChange={handleChangeText}
        />
      </S.Td>
      <S.Td>
        <S.TInput
          type='text'
          placeholder='직위'
          name='position'
          value={member.position}
          onChange={handleChangeText}
        />
      </S.Td>
      <S.Td>
        <S.TInput
          type='text'
          placeholder='학번 및 소속'
          name='memberInfo'
          value={member.memberInfo}
          onChange={handleChangeText}
        />
      </S.Td>
      <S.Td $right='1.75rem solid var(--black)'>
        <S.TFileInput htmlFor={`file-input-${member.memberId}`}>
          <img src={plusIcon} alt='plus' />
          <S.TFileName>{fileName ? fileName : `사진 업로드`}</S.TFileName>
        </S.TFileInput>
        <input
          type='file'
          id={`file-input-${member.memberId}`}
          style={{ display: 'none' }}
          onChange={handleImgUpload}
        />
      </S.Td>
      <S.Td $right='none'>
        <S.TdContainer>
          <S.CheckboxWrapper>
            <CustomCheckbox
              id={member.memberId}
              checked={member.isActive}
              onChange={handleCheckbox}
            />
          </S.CheckboxWrapper>
          <S.DeleteButton
            onClick={() => {
              handleDeleteRow(member.memberId);
            }}
          >
            제거
          </S.DeleteButton>
        </S.TdContainer>
      </S.Td>
      <td>
        <S.SaveButton onClick={handleSaveButton} disabled={!isUpdated}>
          저장
        </S.SaveButton>
      </td>
    </tr>
  );
};

export default TableRow;
