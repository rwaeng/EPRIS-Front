import { S } from './AdminActivityItem.style';
import { useState } from 'react';
import UploadItem from './UploadItem';

const SessionList = () => {
  const [prValue, setPrValue] = useState('');
  const [issueValue, setIssueValue] = useState('');
  const [trendValue, setTrendValue] = useState('');

  return (
    <S.Layout>
      <UploadItem
        title='PR Case Study'
        value={prValue}
        setValue={setPrValue}
        ratio='4:3'
        imageNum='4'
      />
      <UploadItem
        title='Issue Briefing'
        value={issueValue}
        setValue={setIssueValue}
        ratio='4:3'
        imageNum='4'
      />
      <UploadItem
        title='Trend Briefing'
        value={trendValue}
        setValue={setTrendValue}
        ratio='4:3'
        imageNum='4'
      />
    </S.Layout>
  );
};

export default SessionList;
