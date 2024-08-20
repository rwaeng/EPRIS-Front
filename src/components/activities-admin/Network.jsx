import { useState } from 'react';
import { S } from './AdminActivityItem.style';
import UploadItem from './UploadItem';

const Network = () => {
  const [eprianValue, setEprianValue] = useState('');
  const [careerValue, setCareerValue] = useState('');

  return (
    <S.Layout>
      <UploadItem
        title='EPRian의 밤'
        value={eprianValue}
        setValue={setEprianValue}
        ratio='4:3'
        imageNum='1'
      />
      <UploadItem
        title='Career Lecture'
        value={careerValue}
        setValue={setCareerValue}
        ratio='4:3'
        imageNum='1'
      />
    </S.Layout>
  );
};

export default Network;
