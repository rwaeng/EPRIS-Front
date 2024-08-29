import { S } from './AdminActivityItem.style';
import { useEffect, useState } from 'react';
import { getSession } from '../../api/session';
import UploadItem from './UploadItem';

const SessionList = () => {
  const [prValue, setPrValue] = useState({});
  const [issueValue, setIssueValue] = useState({});
  const [trendValue, setTrendValue] = useState({});

  // 데이터 fetching
  const readSession = async () => {
    try {
      const res = await Promise.all(
        ['pr', 'issue', 'trend'].map(async type => {
          const res = await getSession(type);
          return res;
        }),
      );
      setPrValue(res[0]);
      setIssueValue(res[1]);
      setTrendValue(res[2]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    readSession();
  }, []);

  return (
    <S.Layout>
      <UploadItem
        key='pr'
        sessionType='pr'
        title='PR Case Study'
        value={prValue.sessionInfo}
        setValue={setPrValue}
        ratio='4:3'
        imageNum='4'
        imageUrl={prValue.imageList}
        index={1}
      />
      <UploadItem
        key='issue'
        sessionType='issue'
        title='Issue Briefing'
        value={issueValue.sessionInfo}
        setValue={setIssueValue}
        ratio='4:3'
        imageNum='4'
        imageUrl={issueValue.imageList}
        index={2}
      />
      <UploadItem
        key='trend'
        sessionType='trend'
        title='Trend Briefing'
        value={trendValue.sessionInfo}
        setValue={setTrendValue}
        ratio='4:3'
        imageNum='4'
        imageUrl={trendValue.imageList}
        index={3}
      />
    </S.Layout>
  );
};

export default SessionList;
