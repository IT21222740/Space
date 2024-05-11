import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../contexts/authContext";
import { Navigate, useNavigate } from "react-router-dom";
const SignUp = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("account created");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="signup-container">
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="secondary-heading">Please Sign Up</h2>
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
            Sign up
          </button>
          <br />
          <p>
            Alread registerd? <Link to="/login">login</Link>
          </p>
        </label>
      </form>
    </div>
  );
};

export default SignUp;
