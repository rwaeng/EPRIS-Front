import { S } from './AdminActivityItem.style';
import { useState } from 'react';
import useResizeTextarea from '../../hooks/useResizeTextarea';
import { TextButton } from '../common/CommonButtons/CommonButtons';

const AwardStatistics = () => {
  const [awardData, setAwardData] =
    useState(`<신정부 정책 전략회> 정부주제 대회 ‘대상’
KEB하나은행 마케팅크루 ‘대상‘
대학생 공공커뮤니케이션 콘테스트 ‘최우수상’
KPR 대학생 PR 아이디어 공모전 ‘우수상’
파크랜드 대학생마케팅공모전 ‘장려상‘
2021 대한민국 대학생광고대회 ‘파이널리스트’`);
  const [projectNum, setProjectNum] = useState('');
  const [awardNum, setAwardNum] = useState('');
  const { ref, onInput } = useResizeTextarea();

  const handleSaveItem = () => {
    // 저장 버튼
  };

  return (
    <S.Layout>
      <S.Form>
        <S.H2>수상 내역</S.H2>
        <S.Textarea
          ref={ref}
          value={awardData}
          onChange={e => setAwardData(e.target.value)}
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
            value={awardNum}
            onChange={e => setAwardNum(e.target.value)}
          />
        </S.Fieldset>
      </S.Form>
      <TextButton
        type='submit'
        text='저장'
        isActive={awardData && projectNum && awardNum}
        onClick={handleSaveItem}
      />
    </S.Layout>
  );
};

export default AwardStatistics;
