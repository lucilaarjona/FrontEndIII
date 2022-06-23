import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SingUp = ({ setIsLogged, userRegistry }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    setIsSent(true);
    let value = {
      name,
      email,
      password,
    };
    userRegistry(value);
    e.preventDefault();
    setIsLogged(true);
    navigate("/singin");
  };
  return (
    <form onSubmit={handlerSubmit}>
      <input placeholder="name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/singin">Sing In</Link>
      <button type="submit">Send</button>
    </form>
  );
};

export default SingUp;
