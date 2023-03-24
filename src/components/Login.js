import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserDetails } from "./rtk/features/protectedSlice";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usernameInput = useRef();
  const pwdInput = useRef();

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  console.log(users);

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const navigate = useNavigate();

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

  const loginValidation = () => {
    let obj = users.find((credentials) => {
      return (
        credentials.email === userName && credentials.id.toString() === password
      );
    });

    if (obj !== undefined) {
      dispatch(setUserDetails(obj));
      const myObjectString = JSON.stringify(obj);
      sessionStorage.setItem("myObject", myObjectString);
      sessionStorage.setItem("login", "true");
      navigate("/blogs");
    }
  };

  return (
    <div className="main-div">
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type="email"
          placeholder="Enter the Username"
          ref={usernameInput}
          className="usernameinput"
          onChange={userNameHandler}
          onClick={() => usernameInput.current.focus()}
          value={userName}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter the password"
          ref={pwdInput}
          className="usernameinput"
          onChange={pwdHandler}
          onClick={() => pwdInput.current.focus()}
          value={password}
        />
        <div>
          <button onClick={loginValidation} type="submit" className="login-btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
