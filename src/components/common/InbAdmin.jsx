import { S } from './InbAdmin.style';

// 부모 컴포넌트에 const [clicked, setClicked] = useState(menuList[0]); 추가
// <InbAdmin menuList={menuList} clicked={clicked} setClicked={setClicked} />;

const InbAdmin = ({ menuList = [], clicked, setClicked }) => {
  const handleClickMenu = e => {
    setClicked(menuList[Number(e.target.id)]);
  };

  return (
    <S.Layout>
      {menuList.map((it, idx) => (
        <S.Button id={idx} $isActive={clicked === it} onClick={handleClickMenu}>
          {it}
        </S.Button>
      ))}
    </S.Layout>
  );
};

export default InbAdmin;
