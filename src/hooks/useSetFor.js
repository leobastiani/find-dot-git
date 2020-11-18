import { useCallback, useEffect, useRef, useState } from "react";

export default function useSetFor(initialValue) {
  const [value, setValue] = useState(initialValue);
  const id = useRef(0);
  const setFor = useCallback((newValue, ms) => {
    setValue(newValue);
    clearTimeout(id.current);
    id.current = setTimeout(() => setValue(initialValue), ms);
  });

  useEffect(() => {
    clearTimeout(id.current);
  }, []);
  return [value, setFor];
}
