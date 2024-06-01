import React, { useState } from "react";
import "./Register.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import regimg from '../../Assets/Images/regimg.svg';

firebase.initializeApp(firebaseConfig);


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successDialog, setSuccessDialog] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      setSuccessDialog(true);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="counter">
        <div className="registerimgdiv">
            <img src={regimg} alt="" />
        </div>

        <div className="counter_form">
            <form className="counter_form_content d-flex flex-column align-items-center justify-content-center"action="/">
            
            <div className="counter_form_title">Register now</div>
                
                <input
                  type="email"
                  className="counter_input"
                  placeholder="Your Email:"
                  required="required"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="password"
                  className="counter_input"
                  placeholder="Password"
                  required="required"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <button
                  type="submit"
                  onClick={handleRegistration}
                  className="counter_form_button"
                >
                  submit now
                </button>

                <p>
                  Already have an account? <a href="/login">Login</a>
                </p>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {successDialog && (
                  <div
                    style={{
                      border: "1px solid green",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <p>
                      Registration successful! You can now proceed to the login
                      screen.
                    </p>
                  </div>
                )}
              </form>
        </div>
      </div>
    </>
  );
}
