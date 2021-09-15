import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useHistory } from "react-router-dom";
import { signInWithGoogle, signOut } from "../Services/Firebase";
import "../Components/Style/Login.css";
import { SiTwitter } from "react-icons/si";
import { FcKey } from "react-icons/fc";
import { AiFillLock} from "react-icons/ai";
import { FaInstagramSquare} from "react-icons/fa";
import { GrFacebook} from "react-icons/gr";
import TripLogo from "./Images/giflogo.GIF"
// import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup } from 'mdb-react-ui-kit';

const Login = () => {
  const user = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    if (user) {
      history.push("/loggedInPage");
    }
  }, [user, history]);
  return (
    <div className="sign-box">
      <div className="top">
        <div className="social-icons">
          <FcKey />
          <SiTwitter />
          <FaInstagramSquare />
          <GrFacebook />
        </div>
      </div>
      <nav className="nav-login">
        <ul className="nav-ul">
          <li>
          <img src={TripLogo} style={{height:"119px", width: "119px"}}/>
          </li>
          <li>
            <h2>How it Works</h2>
          </li>
          <li>
            <h2>Budgeting 411</h2>
          </li>
          <li>
            <h2>Tax Incentives</h2>
          </li>
        </ul>
        <div className="icon-login">
          <button className="sign-in" onClick={signInWithGoogle}><AiFillLock/>Sign In</button>
          <button className="sign-up">Free Sign Up</button>
        </div>
      </nav>
  <div className="login-body">
<section className="first-section">

      <article className="intro-text">

<h1 className="b">Experience a New Way </h1>
<h1 className="b">To Manage </h1>
<h1 className="g">Your Auto Finances</h1>
<button onClick={signInWithGoogle} className="start-up">Get Started Now</button>
      </article>

        <div className="card-a">

          <div className="first-image">
    {/* image */}
          {/* <div className="text-a"text></div> */}
          </div>
      </div>
      
  </section>
  </div>


</div>









    /* <div>
        <div className="square-box">
          <div className="top-sign">
            <h3>Sign In</h3>
            <div></div>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="avatar">
                  <span className="first-avi">
                    <MdPerson />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username"
                />
              </div>
              <br></br> <br></br>
              <div className="input-group form-group">
                <div className="key">
                  <span className="first-key">
                    <FcKey />
                  </span>
                </div>

                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                />
              </div>
              <br></br>
              <ssection className="check-sign">
                <div className="remember">
                  <input className="font" type="checkbox" />
                  Remember Me
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn float-right login_btn"
                  />
                </div>
              </ssection>
            </form>
          </div>
          <div className="top-sign">
            <div className="link-foot">
              <button onClick={signInWithGoogle}>Sign in With google</button>
            </div>
            <div>
              <button onClick={signOut}> sign out</button>
            </div>
          </div>
        </div>
      </div> */
  );
};

export default Login;
