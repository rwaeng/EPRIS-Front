import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const useHorizontalScroll = () => {
  const scrollRef = useRef();
  const isDesktop = useMediaQuery({ query: 'min-width: 1280px' });

  useEffect(() => {
    const container = scrollRef.current;
    if (!isDesktop && container) {
      container.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isDesktop]);

  const handleWheel = e => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY * 0.4;
      e.preventDefault();
    }
  };

  return scrollRef;
};

export default useHorizontalScroll;
