import { useEffect, useState } from 'react';
import { S } from './EPRiansPage.style';
import { uploadImages } from '../../../api/fileUpload';
import { getLogos, postLogos } from '../../../api/logo';
import { deleteGeneration, getMembers } from '../../../api/member';
import InbAdmin from '../../../components/common/Inb/InbAdmin';
import { UploadComponent } from '../../../components/common/UploadComponent/UploadComponent';
import {
  TextButton,
  TextIconButton,
} from '../../../components/common/CommonButtons/CommonButtons';
import plusIcon from '../../../assets/Admin_EPRiansPage/ps.svg';
import MemberTable from '../../../components/EPRians-admin/MemberTable';

const EPRiansPage = () => {
  //INB
  const menuList = ['Members', 'Alumni Brands'];
  const [clicked, setClicked] = useState(menuList[0]);

  //Members
  const [memberTable, setMemberTable] = useState([]);
  const [addId, setAddId] = useState(0);

  useEffect(() => {
    const getPrevMembers = async () => {
      try {
        const res = await getMembers();
        res.sort((a, b) => {
          // 'th' 제거 후 정수로 변환
          const numA = parseInt(a.num.replace('th', ''), 10);
          const numB = parseInt(b.num.replace('th', ''), 10);

          // 내림차순 정렬
          return numA - numB;
        });

        setMemberTable(res);
      } catch (err) {
        console.error(err);
      }
    };

    getPrevMembers();
  }, []);

  const handleAddMembers = () => {
    setMemberTable([...memberTable, { num: addId, memberList: [] }]);
    setAddId(prev => prev - 1);
  };

  const handleDeleteTable = async (gen, num) => {
    try {
      const userConfirmed = window.confirm('정말 삭제하시겠습니까?');
      if (userConfirmed) {
        if (num < 1) {
          setMemberTable(prev => prev.filter(table => table.num !== num));
        } else {
          const res = await deleteGeneration(gen);

          if (res.status === 200) {
            alert('삭제되었습니다.');
            setMemberTable(prev => prev.filter(table => table.num !== gen));
          } else {
            alert('저장하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
          }
        }
      }
    } catch (err) {
      alert('저장하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
      console.error(err);
    }
  };

  //Alumni Brands
  const [isLogoChanged, setIsLogoChanged] = useState(false);
  const [imgFile, setImgFile] = useState([]); //실제 이미지 파일
  const [imgPreview, setImgPreview] = useState([]); //프리뷰로 띄울 이미지 url
  const [imageUrlList, setImageUrlList] = useState([]); //백엔드에 보낼 presigned url

  useEffect(() => {
    const getPrevImages = async () => {
      //기존에 저장되어있던 이미지를 불러와서 프리뷰 + presigned url 배열에 저장
      try {
        const res = await getLogos('alumni');

        const prevUrlList = res.map(item => item.imageUrl);
        setImgPreview(prevUrlList);
        setImageUrlList(prevUrlList.map(url => ({ imageUrl: url })));
      } catch (error) {
        console.error(error);
      }
    };

    getPrevImages();
    setImgFile([]);
    setIsLogoChanged(false);
  }, [clicked]);

  useEffect(() => {
    if (imgPreview.length < 1) {
      setIsLogoChanged(false);
    }
  }, [imgPreview]);

  const createLogos = async finalUrlList => {
    try {
      const res = await postLogos('alumni', finalUrlList);
      if (res.status === 200) {
        setImageUrlList(finalUrlList);
        alert('저장되었습니다.');
        setIsLogoChanged(false);
      } else {
        alert('저장하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (err) {
      alert('저장하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
      console.error(err);
    }
  };

  //저장 버튼 클릭하였을 때 실행
  const handleImageUploadButton = async () => {
    const updatedUrlList = await uploadImages(imgFile); // presigned url 발급
    const finalUrlList = [...imageUrlList, ...updatedUrlList]; //기존 presigned url 배열에 추가된 이미지 url 저장
    await createLogos(finalUrlList); // 백엔드로 이미지 URL 배열 전송
  };

  return (
    <S.Container>
      <InbAdmin menuList={menuList} clicked={clicked} setClicked={setClicked} />
      {clicked === menuList[0] ? (
        <S.MembersContainer>
          {memberTable.map((mem, index) => (
            <MemberTable
              key={mem.num}
              memberNum={index + 1}
              info={mem}
              handleDeleteTable={handleDeleteTable}
              addId={addId}
              setAddId={setAddId}
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
            <UploadComponent
              imageNum={null}
              imgFile={imgFile}
              setImgFile={setImgFile}
              imgPreview={imgPreview}
              setImgPreview={setImgPreview}
              setImageUrlList={setImageUrlList}
              setIsChanged={setIsLogoChanged}
            />
          </S.UploadComponentWrapper>
          <TextButton
            text='저장'
            isActive={isLogoChanged}
            disabled={!isLogoChanged}
            onClick={handleImageUploadButton}
          />
        </S.AlumniBrandsContainer>
      )}
    </S.Container>
  );
};

export default EPRiansPage;
