import { S } from './Greetings.style.js';
import img from '../../assets/Main/img.svg';

const Greetings = () => {
  return (
    <S.GreetingsLayout>
      <S.PhotoWrapper src={img} />
      <S.MemberContainer>
        <S.NameText>전유나</S.NameText>
        <S.RoleText>37th 학회장</S.RoleText>
        <S.InfoText>
          {`진로의 방향성을 잡아가기에 막막했던 제게 EPRIS는 올바른 방향을 제시해주는 등대와 같은 존재였습니다. 진로 선택의 갈림길에 서서 고민하고 있거나 성장에 대한 막연한 욕구를 가지고 계신 여러분께 EPRIS의 다양한 활동을 통해 PR의 시각으로 세상을 바라볼 수 있는 경험을 제공하고자 합니다. 빛나는 열정으로 가득한 사람들과 교류하며 논리적인 사고력을 기르고 함께 성장하고자 하는 당신에게 EPRIS는 최고의 선택입니다. 
          
          37번째 EPRian이 될 여러분을 기다리겠습니다.`}
        </S.InfoText>
      </S.MemberContainer>
    </S.GreetingsLayout>
  );
};

export default Greetings;
