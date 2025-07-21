import { createContext, useContext, useState, useEffect } from "react";
import { getFromStorage, setToStorage, removeFromStorage } from "../utils/storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = getFromStorage("loggedInUser");
    if (stored?.username) {
      setUser(stored);
    }
  }, []);

  const login = (username) => {
    const userObj = { username };
    setToStorage("loggedInUser", userObj);
    setUser(userObj);
  };

  const logout = () => {
    removeFromStorage("loggedInUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
