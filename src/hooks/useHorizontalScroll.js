import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const useHorizontalScroll = type => {
  const scrollRef = useRef();
  const isMobile = useMediaQuery({ query: '(max-width: 749px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  useEffect(() => {
    const container = scrollRef.current;

    if (type && isMobile && container) {
      container.addEventListener('wheel', handleWheel);
    } else if (!type && !isDesktop && container) {
      container.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isMobile, isDesktop]);

  const handleWheel = e => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY * 0.4;
      scrollRef.current.scrollLeft += e.deltaX * 0.4;
      e.preventDefault();
    }
  };

  return scrollRef;
};

export default useHorizontalScroll;
