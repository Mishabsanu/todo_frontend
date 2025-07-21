export const getFromStorage = (key) => {
  try {
    const value = localStorage.getItem(key);
    console.log(value, "value");

    return value !== null ? JSON.parse(value) : null;
  } catch {
    console.warn(`Error parsing localStorage key "${key}"`);
    return null;
  }
};

export const setToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.warn(`Error saving to localStorage key "${key}"`);
  }
};

export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch {
    console.warn(`Error removing localStorage key "${key}"`);
  }
};
