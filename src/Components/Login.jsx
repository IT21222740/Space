import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../contexts/authContext";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("login successfull");
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="signup-container">
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="secondary-heading">Please Login</h2>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="primary-button "
            style={{ background: "#fe9e0d", marginTop: "2rem" }}
            type="submit"
          >
            Login
          </button>
          <br />
          <p>
            Haven't registerd? <Link to="/signup">SignUp</Link>
          </p>
        </label>
      </form>
    </div>
  );
};

export default Login;
