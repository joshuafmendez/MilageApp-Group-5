import React, { useState, useEffect, createContext } from "react";
import { auth } from "../Services/Firebase";
import { useDispatch } from "react-redux";
import { fetchAllCarsFN } from "../util/networkRequest";
import { addCars } from "../Store/Actions/carsActions";
export const UserContext = createContext({ user: null });

const UserProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;

        await setUser({
          displayName,
          email,
          photoURL,
          uid,
        });
        const fetchAllCars = async () => {
          try {
            const res = await fetchAllCarsFN(user);
            dispatch(addCars(res));
          } catch (error) {
            console.log(error);
          }
        };
        fetchAllCars();
      } else {
        setUser(null);
      }
    });
  }, [dispatch]);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
