import { useState, useEffect } from 'react';

export default function useDebounce(key: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState(key);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(key);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [key, delay]);
  return debounceValue;
}
