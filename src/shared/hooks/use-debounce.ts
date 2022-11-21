import { useEffect, useState } from 'react';

const DEFAULT_DELAY = 500;

const useDebounce = <T>(value: T, delay = DEFAULT_DELAY) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay, value]);

  return debouncedValue;
};

export { useDebounce };
