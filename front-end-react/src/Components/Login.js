


import React from "react";
import "../Components/Style/Login.css"
import { FcCurrencyExchange} from 'react-icons/fc';
import { MdPerson} from 'react-icons/md';
import { FcKey} from 'react-icons/fc';


const Login = ()=> {
  return (

<div className="sign-box">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="top-sign">
				<h3>Sign In</h3>
				<div>
					{/* <span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span> */}
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

				



				</form>
			</div>
			<div className="top-sign">
				<div className="link-foot">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
  );
}

export default Login;



