import { useEffect, useState } from "react";

export default function useLocalStorage(key, inputValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue !== null ? storedValue : inputValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return { value, setValue };
}
