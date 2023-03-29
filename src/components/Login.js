import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./rtk/fetchedDetail";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usernameInput = useRef();
  const pwdInput = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const userNameHandler = (e) => {
    setUserName(e.target.value);
    usernameInput.current.focus();
  };

  const pwdHandler = (e) => {
    setPassword(e.target.value);
    pwdInput.current.focus();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUserName("");
    setPassword("");
  };

  const user = async (userId) => {
    const resp = await axios.get(
      `https://gorest.co.in/public/v2/users/${userId}`,
      {
        headers: {
          Authorization:
            "Bearer 22e098f70d694940d7496ba457aff7a222fb1a1b1b4098ff9f38a4496f7b7b1a",
        },
      }
    );
    const data = resp.data;
    return data;
  };

  const loginValidation = async () => {
    const data = await user(password);
    dispatch(setUserDetails(data));
    const isCorrect =
      data?.email === userName && data?.id.toString() === password;
    if (isCorrect) {
      const myObjectString = JSON.stringify(data);
      localStorage.setItem("myObject", myObjectString);
      localStorage.setItem("login", "true");
      navigate("/blogs");
    }
  };

  return (
    <div className="main-div">
      <h1 className="login-heading">Welcome to BlogJot</h1>
      <form className="login-form" onSubmit={submitHandler}>
        <div className="wrapper">
          <label>Username</label>
          <input
            className="login-input"
            type="email"
            placeholder="Enter the Username"
            ref={usernameInput}
            onChange={userNameHandler}
            onClick={() => usernameInput.current.focus()}
            value={userName}
          />
        </div>
        <div className="wrapper">
          <label>Password</label>
          <input
            className="login-input"
            type="password"
            placeholder="Enter the password"
            ref={pwdInput}
            onChange={pwdHandler}
            onClick={() => pwdInput.current.focus()}
            value={password}
          />
        </div>
        <button onClick={loginValidation} type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
