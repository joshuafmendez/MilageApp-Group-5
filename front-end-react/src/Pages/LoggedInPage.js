import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useHistory } from "react-router-dom";
// import { signOut } from "../Services/Firebase";
import CarsIndex from "./Cars/CarsIndex";
 import "../Components/Style/LoggedInPage.css"

export const LoggedInPage = () => {
  // const imgStyle = {
  //   width: "30vh",
  //   height: "30vh",
  // };
  const history = useHistory();
  const user = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  // const handleLogout = async () => {
  //   signOut();
  //   alert("you've been logged out");
  // };

  //  login ? <div></div>:<div></div>

  if (user) {
    return (
      <div className="log-start">
        {/* <h1> YOU ARE NOW LOGGED IN : </h1> */}
        <h1>Welcome {user.displayName} !</h1>
        {/* email: {user.email} */}
  
       
          <CarsIndex />

        {/* <button onClick={handleLogout}> LOG OUT</button> */}
      </div>
    );
  } else return <div> NOT LOGGED IN </div>;
};
