import { useState, useEffect, useMemo } from "react";
import { getFromStorage, setToStorage } from "../utils/storage";

export function useUserLocalStorage(key, defaultValue) {
  const user = getFromStorage("loggedInUser");
  const fullKey = useMemo(
    () => (user?.username ? `${key}_${user.username}` : null),
    [key, user]
  );
  const [storedValue, setStoredValue] = useState(() => {
    if (!fullKey) return defaultValue;
    try {
      const item = getFromStorage(fullKey);
      return item !== null ? item : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (fullKey) {
      setToStorage(fullKey, storedValue);
    }
  }, [fullKey, storedValue]);

  return [storedValue, setStoredValue];
}
