import { Dispatch, SetStateAction, useState } from 'react';
import isBrowser from '../lib/isBrowser';

function useLocalStorage<T>(
  key: string,
  defaultValue?: T
): [T | undefined, Dispatch<SetStateAction<T>>] {
  if (!isBrowser) return [defaultValue, () => {}];

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);

      return item ? item : defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });

  const setValue = (value: unknown) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, valueToStore);
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
