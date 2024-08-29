import { useEffect, useState } from 'react';
import { S } from './AdminActivityItem.style';
import { getNetwork } from '../../api/network';
import UploadItem from './UploadItem';

const Network = () => {
  const [eprianValue, setEprianValue] = useState({});
  const [careerValue, setCareerValue] = useState({});

  // 데이터 fetching
  const readNetwork = async () => {
    try {
      const res = await getNetwork();
      if (res[0].networkType === 'NIGHT') {
        setEprianValue(res[0]);
        setCareerValue(res[1]);
      } else {
        setEprianValue(res[1]);
        setCareerValue(res[0]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    readNetwork();
  }, []);

  return (
    <S.Layout>
      <UploadItem
        type='network'
        networkType='night'
        title='EPRian의 밤'
        value={eprianValue.networkInfo}
        ratio='4:3'
        imageNum='1'
        imageUrl={[eprianValue.networkImg]}
        index={1}
      />
      <UploadItem
        type='network'
        networkType='lecture'
        title='Career Lecture'
        value={careerValue.networkInfo}
        ratio='4:3'
        imageNum='1'
        imageUrl={[careerValue.networkImg]}
        index={2}
      />
    </S.Layout>
  );
};

export default Network;
