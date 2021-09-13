import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useHistory } from "react-router-dom";
import { signInWithGoogle, signOut } from "../Services/Firebase";
import "../Components/Style/Login.css"
import { MdPerson} from 'react-icons/md';
import { FcKey} from 'react-icons/fc';

	export const Login = () => {
		const user = useContext(UserContext);
		const history = useHistory();
		useEffect(() => {
		  if (user) {
			history.push("/loggedInPage");
		  }
		}, [user, history]);
  return (

<div className="sign-box">
	<div>
		<div className="square-box">
			<div className="top-sign">
				<h3>Sign In</h3>
				<div>
				
				</div>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="avatar">
							<span className="first-avi"><MdPerson/></span>
						</div>
						<input type="text" className="form-control" placeholder="username"/>
						
					</div>
				
                    <br></br>       <br></br>
                
                
                
                	<div className="input-group form-group">
						<div className="key">
							<span className="first-key"><FcKey/></span>
						</div>

                 
						<input type="password" className="form-control" placeholder="password"/>
					</div>

<br></br>

<ssection className="check-sign">
<div className="remember">
						<input className="font" type="checkbox"/>Remember Me
					</div>
					<div className="form-group">
						<input type="submit" value="Login" className="btn float-right login_btn"/>
					</div>

</ssection>

{/* <button onClick={signInWithGoogle}>Sign in With google</button>
          <button onClick={signOut}> sign out</button> */}



				</form>
			</div>
			<div className="top-sign">
				<div className="link-foot">
					{/* Don't have an account?<a href="#">Sign Up</a> */}
					<button onClick={signInWithGoogle}>Sign in With google</button>
				</div>
				<div>
					{/* <a href="#">Forgot your password?</a> */}
					<button onClick={signOut}> sign out</button>
				</div>
			</div>
		</div>
	</div>
</div>
  );
}

// export default Login;



