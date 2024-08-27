import { S } from './AdminActivityItem.style';
import { useEffect, useId, useRef, useState } from 'react';
import { postSession } from '../../api/session';
import { uploadImages } from '../../api/fileUpload';
import { postCorporate, postLogo } from '../../api/corporate';
import { postNetwork } from '../../api/network';
import useResizeTextarea from '../../hooks/useResizeTextarea';
import { TextButton } from '../common/CommonButtons/CommonButtons';
import { UploadComponent } from '../common/UploadComponent/UploadComponent';

const UploadItem = ({
  type,
  sessionType,
  networkType,
  title,
  value,
  ratio,
  imageNum,
  imageUrl = [],
}) => {
  const id = useId();
  const prevItemValue = useRef(value);
  const [data, setData] = useState('');
  const [imgFile, setImgFile] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);
  const [imageUrlList, setImageUrlList] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { ref, onInput } = useResizeTextarea(data);

  // 버튼 활성화 여부 판단
  useEffect(() => {
    const hasImages = imgFile.length > 0 || imageUrlList.length > 0;
    const isDataChanged = data && prevItemValue.current !== data;

    setIsActive((hasImages && isDataChanged) || (hasImages && isChanged));
  }, [data, imgFile, imageUrlList, isChanged]);

  // 타입별 api 호출
  const saveHandlers = {
    session: async imageUrlList => {
      const res = await postSession(sessionType, data, imageUrlList);
      return res;
    },
    corporate: async imageUrlList => {
      const res = await postCorporate(data, imageUrlList);
      return res;
    },
    network: async imageUrlList => {
      const res = await postNetwork(
        networkType,
        data,
        imageUrlList[0].imageUrl,
      );
      return res;
    },
    imgOnly: async imageUrlList => {
      const res = await postLogo(imageUrlList);
      return res;
    },
  };

  // 저장 클릭 시 실행
  const handleSaveItem = async () => {
    let updatedUrlList = [];
    if (imgFile.length > 0) {
      updatedUrlList = await uploadImages(imgFile);
    }
    const finalUrlList = [...imageUrlList, ...updatedUrlList];

    if (finalUrlList.length === 0) {
      alert('업로드된 사진이 없습니다.');
      return;
    }

    try {
      let res;
      if (sessionType) {
        res = await saveHandlers.session(finalUrlList);
      } else if (type === 'network') {
        res = await saveHandlers.network(finalUrlList);
      } else if (type === 'imgOnly') {
        res = await saveHandlers.imgOnly(finalUrlList);
      } else {
        res = await saveHandlers.corporate(finalUrlList);
      }

      if (res) {
        prevItemValue.current = data;
        setIsActive(false);
        setIsChanged(false);
        alert('저장되었습니다.');
      }
    } catch (e) {
      alert('저장하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
      console.error(e);
    }
  };

  // info 저장
  useEffect(() => {
    setData(value);
    prevItemValue.current = value;
  }, [value]);

  // image 파일 저장
  useEffect(() => {
    if (type !== 'network') {
      imageUrl.length > 0 && setImgPreview(imageUrl.map(item => item.imageUrl));
      setImageUrlList(imageUrl.map(url => ({ imageUrl: url.imageUrl })));
    } else {
      setImgPreview(imageUrl);
      setImageUrlList(imageUrl.map(url => ({ imageUrl: url })));
    }
  }, [imageUrl]);

  return (
    <S.Form>
      <S.H2>{title}</S.H2>
      {type !== 'imgOnly' && (
        <S.Textarea
          ref={ref}
          value={data}
          onChange={e => setData(e.target.value)}
          onInput={onInput}
        />
      )}
      <UploadComponent
        ratio={ratio}
        imageNum={imageNum}
        index={id}
        imgFile={imgFile}
        imgPreview={imgPreview}
        setImgFile={setImgFile}
        setImgPreview={setImgPreview}
        setImageUrlList={setImageUrlList}
        setIsChanged={setIsChanged}
      />
      <TextButton
        type='button'
        text='저장'
        isActive={isActive}
        disabled={!isActive}
        onClick={handleSaveItem}
      />
    </S.Form>
  );
};

export default UploadItem;
