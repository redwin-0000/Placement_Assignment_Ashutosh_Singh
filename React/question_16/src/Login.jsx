// Login credential

// email : eve.holt@reqres.in
// password : cityslicka

import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const submithandler = async () => {
    try {
      const rawData = axios.post("https://reqres.in/api/login", {
        email: email,
        password: password,
      });

      if ((await rawData).data) {
        nav("/home");
      }
      setError("");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="mCont">
      <div className="loginCard">
        <input
          type="text"
          onChange={(v) => setEmail(v.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          onChange={(v) => setPassword(v.target.value)}
          placeholder="Password"
        />
        <button
          className="btnLogin"
          onClick={() => {
            submithandler();
          }}
        >
          Login
        </button>
        <h1 style={{ color: "red", fontSize: "20px" }}>{error}</h1>
      </div>
    </div>
  );
};

export default Login;
