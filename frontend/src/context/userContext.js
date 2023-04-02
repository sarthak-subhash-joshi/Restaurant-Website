// user context
import { createContext, useContext, useEffect, useState } from "react";

// axios
import axios from "axios";

// context
export const UserContext = createContext();

// provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const tokenCheck = async () => {
      try {
        const userData = await axios.get("/auth/getById");
        console.log(userData);
        if (userData.status === 200 && !user) {
          setUser(userData.data.data.user);
          setIsUserLoggedIn(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    tokenCheck();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, isUserLoggedIn, setIsUserLoggedIn, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
