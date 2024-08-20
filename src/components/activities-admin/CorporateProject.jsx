import { useState } from 'react';
import { S } from './AdminActivityItem.style';
import UploadItem from './UploadItem';

const CorporateProject = () => {
  const [contentValue, setContentValue] = useState('');

  return (
    <S.Layout>
      <UploadItem
        title='Project Contents'
        value={contentValue}
        setValue={setContentValue}
        ratio='4:3'
      />
      <UploadItem title='Corporate Logo' type='imgOnly' />
    </S.Layout>
  );
};

export default CorporateProject;
