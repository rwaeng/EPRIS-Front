import { useEffect, useState } from 'react';

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
import { postPresignedURL, putPresignedURL } from '../../api/fileUpload';
import { getLogos, postLogos } from '../../api/logo';

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
  }, []);

  const createLogos = async finalUrlList => {
    try {
      const res = await postLogos('alumni', finalUrlList);
      if (res) {
        setImageUrlList(finalUrlList);
        alert('저장되었습니다.');
      }
    } catch (err) {
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
            <UploadComponent
              imageNum={null}
              ratio='5:3'
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
