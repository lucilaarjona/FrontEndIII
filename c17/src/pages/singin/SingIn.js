import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SingIn = ({ setIsLogged, userInfo }) => {
  const [signIn, setSignIn] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (
      signIn.email === userInfo.email &&
      signIn.password === userInfo.password
    ) {
      setIsLogged(true);
      navigate("/home");
    }
  };
  return (
    <form onSubmit={handlerSubmit}>
      <input
        placeholder="email"
        onChange={(e) => setSignIn({ ...signIn, email: e.target.value })}
      />
      <input
        placeholder="password"
        onChange={(e) => setSignIn({ ...signIn, password: e.target.value })}
      />
      <Link to="/singup">Sing In</Link>
      <button type="submit">Send</button>
    </form>
  );
};

export default SingIn;
