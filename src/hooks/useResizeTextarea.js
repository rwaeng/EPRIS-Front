import { useCallback, useEffect, useRef } from 'react';

// textarea 입력 시 높이 조정
const useResizeTextarea = () => {
  const ref = useRef();

  const resizeTextarea = useCallback(() => {
    if (ref.current) {
      ref.current.style.height = '0';
      ref.current.style.height = ref.current.scrollHeight - 32 + 'px';
    }
  }, []);

  useEffect(() => {
    resizeTextarea();
  }, []);

  return { ref, onInput: resizeTextarea };
};

export default useResizeTextarea;
