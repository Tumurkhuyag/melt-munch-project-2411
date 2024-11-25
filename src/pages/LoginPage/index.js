import React, { useState } from "react";
import { Button } from "../../components/General/Button";

import css from "./style.module.css";

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };

  const login = () => {
    alert("login... " + loginInput.email + " : " + loginInput.password);
  };

  return (
    <div className={css.Login}>
      <h2>Нэвтрэх</h2>
      <input
        type="email"
        name="email"
        value={loginInput.email}
        onChange={handleInputChange}
        placeholder="Имэйл хаяг"></input>
      <input
        type="password"
        name="password"
        value={loginInput.password}
        onChange={handleInputChange}
        placeholder="Нууц үг"></input>
      <Button label="Нэвтрэх" type="Primary" clicked={login} />
    </div>
  );
};

export default LoginPage;
