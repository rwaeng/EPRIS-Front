import { S } from './ClassInfo2Page.style.js';
import { useState, useEffect } from 'react';
import CardComponent from '../../../components/Admin/CardComponent';
import AddIcon from '../../../assets/Admin/plus.svg';
import {
  getCards,
  createCard,
  updateCard,
  deleteCard,
} from '../../../api/admin.js';

const ClassInfo2Page = () => {
  const [cards, setCards] = useState(null);
  const [addedCards, setAddedCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cardData = await getCards();
        console.log('Fetched card data:', cardData); // 디버깅용 로그
        setCards(cardData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCards();
  }, []);
  if (!cards) {
    return null; // 데이터가 로딩되기 전에는 아무것도 렌더링하지 않음
  }

  const handleAddCard = () => {
    // 새 카드를 추가할 때 사용할 임시 데이터 (빈 카드로 추가)
    const newCard = {
      cardId: Date.now(), //임시로 생성
      name: '',
      position: '',
      introduce: '',
      cardImg: '', // 필요에 따라 기본 이미지 설정
      isNew: true,
    };
    setAddedCards(prev => [...prev, newCard]);
  };

  const handleSaveCard = async (cardId, name, position, introduce, cardImg) => {
    try {
      if (typeof cardId === 'number') {
        // 기존 카드 수정
        await updateCard(cardId, name, position, introduce, cardImg);
      } else {
        // 새 카드 생성
        await createCard(name, position, introduce, cardImg);
        // UI에서 새 카드의 isNew를 false로 변경
        setAddedCards(prevCards =>
          prevCards.map(card =>
            card.cardId === cardId ? { ...card, isNew: false } : card,
          ),
        );
      }
      // // 카드 목록을 다시 불러오기 위해 전체 카드 데이터를 업데이트
      // const updatedCards = await getCards();
      // setCards(updatedCards.data);
      // setAddedCards([]); // 새로 추가된 카드를 초기화
    } catch (error) {
      console.error('Error saving card:', error);
    }
  };
  const handleDeleteCard = async (cardId, isNew) => {
    try {
      if (isNew) {
        // UI에서만 삭제
        setAddedCards(prevCards =>
          prevCards.filter(card => card.cardId !== cardId),
        );
        console.log('Card deleted on UI');
      } else {
        // API 호출 후 UI에서 삭제
        console.log(cardId);
        await deleteCard(cardId);
        setCards(prevCards => prevCards.filter(card => card.cardId !== cardId));
        console.log('Card delete request sent');
      }
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  return (
    <S.ClassInfoLayout>
      {cards.length > 0 &&
        cards.map((card, index) => (
          <CardComponent
            key={card.cardId}
            card={card}
            index={index}
            handleSaveCard={handleSaveCard}
            handleDeleteCard={handleDeleteCard}
          />
        ))}
      {addedCards.length > 0 &&
        addedCards.map((card, index) => (
          <CardComponent
            key={card.cardId}
            card={card}
            index={cards.length + index}
            isNew={true}
            handleSaveCard={handleSaveCard}
            handleDeleteCard={handleDeleteCard}
          />
        ))}
      <S.AddCardBtn onClick={handleAddCard}>
        <S.BtnText>카드 추가하기</S.BtnText>
        <S.BtnIcon src={AddIcon} />
      </S.AddCardBtn>
    </S.ClassInfoLayout>
  );
};

export default ClassInfo2Page;
