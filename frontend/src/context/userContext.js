// user context
import { createContext, useContext, useEffect, useState } from "react";

// axios
import axios from "axios";

// context
export const UserContext = createContext();

// provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const tokenCheck = async () => {
      try {
        const user = await axios.get("/auth/getById");
        console.log(user);
        if (user.status === 200) {
          setUser(user.data);
          setIsUserLoggedIn(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    tokenCheck();
  }, []);

  return (
    <UserContext.Provider value={{ user, isUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
