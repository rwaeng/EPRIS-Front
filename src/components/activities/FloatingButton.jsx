import { S } from './FloatingButton.style';
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { useMediaQuery } from 'react-responsive';
import useScroll from '../../hooks/useScroll';

const FloatingButton = ({
  clicked,
  setClicked,
  locations,
  handleClickFloatingBtn,
  onFocusCorporate,
  onFocusSession,
  onFocusNetwork,
}) => {
  const isBig = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const { state } = useScroll();
  const [position, setPosition] = useState('static');

  const handleScroll = throttle(() => {
    if (locations.session && window.scrollY + 32 >= locations.session) {
      setPosition('fixed');
    } else {
      setPosition('static');
    }
  }, 1000);

  useEffect(() => {
    if (isBig) {
      handleScroll();
    }
  }, [state, isBig]);

  useEffect(() => {
    if (isBig) {
      if (window.scrollY < locations.corporate - 200) {
        setClicked('session');
      } else if (window.scrollY < locations.network - 200) {
        setClicked('corporate');
      } else {
        setClicked('network');
      }
    }
  }, [locations, isBig]);

  return (
    <div>
      {isBig && <S.FloatingButtonContainer $height='0' />}
      <S.FloatingButtonContainer id='float' $position={position}>
        <S.Button
          id='session'
          $isActive={clicked === 'session'}
          onClick={e => {
            handleClickFloatingBtn(e);
            onFocusSession();
          }}
        >
          Session
        </S.Button>
        <S.Button
          id='corporate'
          $isActive={clicked === 'corporate'}
          onClick={e => {
            handleClickFloatingBtn(e);
            onFocusCorporate();
          }}
        >
          {'Corporate\nProject'}
        </S.Button>
        <S.Button
          id='network'
          $isActive={clicked === 'network'}
          onClick={e => {
            handleClickFloatingBtn(e);
            onFocusNetwork();
          }}
        >
          Network
        </S.Button>
      </S.FloatingButtonContainer>
    </div>
  );
};

export default FloatingButton;
