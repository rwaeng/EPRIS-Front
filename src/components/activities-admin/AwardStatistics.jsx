import { S } from './AdminActivityItem.style';
import { useEffect, useRef, useState } from 'react';
import { getAwards, putAwards } from '../../api/award';
import useResizeTextarea from '../../hooks/useResizeTextarea';
import { TextButton } from '../common/CommonButtons/CommonButtons';

const AwardStatistics = () => {
  const [awardsData, setAwardsData] = useState('');
  const [projectNum, setProjectNum] = useState('');
  const [awardsNum, setAwardsNum] = useState('');
  const [isActive, setIsActive] = useState(false);
  const prevAward = useRef('');
  const prevProjectNum = useRef('');
  const prevAwardsNum = useRef('');
  const { ref, onInput } = useResizeTextarea(awardsData);

  const editAwardStatistics = async () => {
    try {
      await putAwards(awardsData, projectNum, awardsNum);
      prevAward.current = awardsData;
      prevProjectNum.current = projectNum;
      prevAwardsNum.current = awardsNum;
      setIsActive(false);
      alert('저장되었습니다');
    } catch (e) {
      console.error(e);
    }
  };

  const readAwardStatistics = async () => {
    try {
      const res = await getAwards();
      setAwardsData(res.awardsInfo);
      setProjectNum(res.projectNum);
      setAwardsNum(res.awardsNum);
      prevAward.current = res.awardsInfo;
      prevProjectNum.current = res.projectNum;
      prevAwardsNum.current = res.awardsNum;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    readAwardStatistics();
  }, []);

  useEffect(() => {
    setIsActive(
      (awardsData && awardsData !== prevAward.current) ||
        (projectNum && projectNum !== prevProjectNum.current) ||
        (awardsNum && awardsNum !== prevAwardsNum.current),
    );
  }, [awardsData, projectNum, awardsNum]);

  return (
    <S.Layout>
      <S.Form>
        <S.H2>수상 내역</S.H2>
        <S.Textarea
          ref={ref}
          value={awardsData}
          onChange={e => setAwardsData(e.target.value)}
          onInput={onInput}
        />
      </S.Form>
      <S.Form>
        <S.H2>메인페이지 통계</S.H2>
        <S.Fieldset>
          <S.Label>프로젝트 수</S.Label>
          <S.FixedInput
            value={projectNum}
            onChange={e => setProjectNum(e.target.value)}
          />
        </S.Fieldset>
        <S.Fieldset>
          <S.Label>수상내역</S.Label>
          <S.FixedInput
            value={awardsNum}
            onChange={e => setAwardsNum(e.target.value)}
          />
        </S.Fieldset>
      </S.Form>
      <TextButton
        type='submit'
        text='저장'
        isActive={isActive}
        disabled={!isActive}
        onClick={editAwardStatistics}
      />
    </S.Layout>
  );
};

export default AwardStatistics;
