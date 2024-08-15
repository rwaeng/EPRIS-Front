import { useCallback, useRef } from 'react';

// textarea 입력 시 높이 재조정
const useResizeTextarea = () => {
  const ref = useRef();
  const onInput = useCallback(() => {
    ref.current.style.height = '0';
    ref.current.style.height = ref.current.scrollHeight - 32 + 'px';
  }, []);

  return { ref, onInput };
};

export default useResizeTextarea;
