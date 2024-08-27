import { useEffect, useState } from 'react';
import { S } from './AdminActivityItem.style';
import { getCorporate, getLogo } from '../../api/corporate';
import UploadItem from './UploadItem';

const CorporateProject = () => {
  const [contentValue, setContentValue] = useState({});
  const [logo, setLogo] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [isLogoChanged, setIsLogoChanged] = useState(false);

  const readCorporate = async () => {
    try {
      const res = await getCorporate();
      setContentValue(res);
    } catch (e) {
      console.error(e);
    }
  };

  const readLogo = async () => {
    try {
      const res = await getLogo();
      setLogo(res);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    readCorporate();
    readLogo();
  }, []);

  return (
    <S.Layout>
      <UploadItem
        type='project'
        title='Project Contents'
        value={contentValue.projectInfo}
        setValue={setContentValue}
        ratio='4:3'
        imageUrl={contentValue.imageList}
        setIsChanged={setIsChanged}
        isChanged={isChanged}
      />
      <UploadItem
        title='Corporate Logo'
        type='imgOnly'
        imageUrl={logo.imageList}
        setIsLogoChanged={setIsLogoChanged}
        isChanged={isLogoChanged}
      />
    </S.Layout>
  );
};

export default CorporateProject;
