import React, { useState, useEffect, createContext } from "react";
import { auth } from "../Services/Firebase";

export const UserContext = createContext({ user: null });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;

        setUser({
          displayName,
          email,
          photoURL,
          uid,
        });
      } else {
        setUser(null);
      }
    });
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;