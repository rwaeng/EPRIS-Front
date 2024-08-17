import { useEffect, useState } from 'react';
import { S } from './FloatingButton.style';
import { useMediaQuery } from 'react-responsive';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
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
  const animation = useScrollFadeIn();
  const { state } = useScroll();
  const [location, setLocation] = useState({});

  // const getAbsoluteLocation = element => {
  //   if (!element) return null;

  //   const rect = element.getBoundingClientRect();
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   const absoluteTop = rect.top + scrollTop;

  //   if (location.scrollLeft) {
  //     setLocation({ ...location, absoluteTop: absoluteTop });
  //     return;
  //   } else {
  //     const scrollLeft =
  //       window.pageXOffset || document.documentElement.scrollLeft;
  //     const absoluteLeft = rect.left + scrollLeft;

  //     const absoluteBottom = rect.bottom + scrollTop;

  //     setLocation({
  //       absoluteTop: absoluteTop,
  //       absoluteLeft: absoluteLeft,
  //       absoluteBottom: absoluteBottom,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   console.log(locations);
  //   console.log(location);
  //   if (isBig) {
  //     const element = document.getElementById('float');
  //     getAbsoluteLocation(element);
  //   }
  // }, [state, isBig]);

  // useEffect(() => {
  //   if (isBig) {
  //     if (locations.corporate - 300 > location.absoluteTop) {
  //       setClicked('session');
  //     } else if (locations.network > location.absoluteTop) {
  //       setClicked('corporate');
  //     } else {
  //       setClicked('network');
  //     }
  //   }
  // }, [location, isBig]);

  return (
    <S.FloatingButtonContainer
      id='float'
      // $titleTop={locations.title - 160}
      // $absoluteBottom={location.absoluteBottom}
      // $containerTop={locations.container}
      // $sessionTop={locations.session}
      // $absoluteTop={location.absoluteTop}
      // $absoluteLeft={location.absoluteLeft}
      {...animation}
    >
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
  );
};

export default FloatingButton;
