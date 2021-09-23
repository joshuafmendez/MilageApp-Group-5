import React, { useContext, useEffect } from "react";
// import "../../App.css";
import { useDispatch } from "react-redux";
// import { addCars } from "../../Store/Actions/carsActions";
import { addCars } from "../Store/Actions/carsActions";
import { fetchAllCarsFN } from "../util/networkRequest";
import { UserContext } from "../Providers/UserProvider";
import { useHistory } from "react-router-dom";
import { signInWithGoogle } from "../Services/Firebase";
import "../Components/Style/Login.css";
import { SiTwitter } from "react-icons/si";
import { FcKey } from "react-icons/fc";
import { AiFillLock } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
import TripLogo from "./Images/giflogo.GIF";
// import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup } from 'mdb-react-ui-kit';

const Login = () => {
  const dispatch = useDispatch();
  const user = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        const res = await fetchAllCarsFN(user);
        dispatch(addCars(res));
        console.log("1", res);
        if (res.length) {
          let filterArray = res.filter((el) => el.is_default === true);
          history.push(`/cars/${filterArray[filterArray.length - 1].id}`);
          // console.log('filtr', filterArray[filterArray.length-1].id)
        } else {
          history.push("/cars/car/new");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllCars();
  }, [dispatch, user, history]);

  useEffect(() => {
    if (user) {
      history.push("/cars");
      // console.log("cars", cars);
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
            <img
              src={TripLogo}
              style={{ height: "119px", width: "119px" }}
              alt={"Logo"}
            />
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
          <button className="sign-in" onClick={signInWithGoogle}>
            <AiFillLock />
            Sign In
          </button>
          <button className="sign-up">Free Sign Up</button>
        </div>
      </nav>
      <div className="login-body">
        <section className="first-section">
          <article className="intro-text">
            <h1 className="b">Experience a New Way </h1>
            <h1 className="b">To Manage </h1>
            <h1 className="g">Your Auto Finances</h1>
            <button onClick={signInWithGoogle} className="start-up">
              Get Started Now
            </button>
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
  );
};

export default Login;
