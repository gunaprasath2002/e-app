import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome icons

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className={`auth-container ${isSignUp ? "sign-up-mode" : ""}`}>
        <div className="row">
          <div className="col-md-6 form-container p-4">
            {isSignUp ? (
              <form className="sign-up">
                <h2 className="text-center">Create Account</h2>
                <div className="social-icons d-flex justify-content-center my-3">
                  <a href="#" className="icon mx-2"><i className="fab fa-google"></i></a>
                  <a href="#" className="icon mx-2"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="icon mx-2"><i className="fab fa-github"></i></a>
                  <a href="#" className="icon mx-2"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <input type="text" className="form-control my-2" placeholder="Name" />
                <input type="email" className="form-control my-2" placeholder="Email" />
                <input type="password" className="form-control my-2" placeholder="Password" />
                <button className="btn btn-primary w-100 mt-2">Sign Up</button>
              </form>
            ) : (
              <form className="sign-in">
                <h2 className="text-center">Sign In</h2>
                <div className="social-icons d-flex justify-content-center my-3">
                  <a href="#" className="icon mx-2"><i className="fab fa-google"></i></a>
                  <a href="#" className="icon mx-2"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="icon mx-2"><i className="fab fa-github"></i></a>
                  <a href="#" className="icon mx-2"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <input type="email" className="form-control my-2" placeholder="Email" />
                <input type="password" className="form-control my-2" placeholder="Password" />
                <a href="#" className="d-block text-center my-2">Forgot Your Password?</a>
                <button className="btn btn-primary w-100 mt-2">Sign In</button>
              </form>
            )}
          </div>
          <div className="col-md-6 toggle-container d-flex flex-column justify-content-center align-items-center p-4">
            <h2>{isSignUp ? "Welcome Back!" : "Hello, Friend!"}</h2>
            <p>{isSignUp ? "Enter your details to sign in" : "Register to get started"}</p>
            <button className="btn btn-outline-light mt-3" onClick={toggleMode}>
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
