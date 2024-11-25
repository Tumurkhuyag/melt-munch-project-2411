import React, { useState } from "react";
import css from "./style.module.css";
import { Button } from "../../components/General/Button";
import * as actions from "../../redux/actions/signupActions";
import { connect } from "react-redux";

const SignupPage = (props) => {
  const [signupInput, setSignupInput] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
    error: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupInput((prev) => ({ ...prev, [name]: value, error: "" }));
  };

  const signup = () => {
    if (signupInput.password1 === signupInput.password2) {
      props.signupUser(
        signupInput.username,
        signupInput.email,
        signupInput.password1
      );
    } else {
      const errorMessage =
        signupInput.password1 !== signupInput.password2
          ? "Оруулсан нууц үгнүүд зөрүүтэй байна"
          : "Интернет сүлжээгээ шалгана уу";

      setSignupInput((prev) => ({
        ...prev,
        error: errorMessage,
      }));
    }
  };

  return (
    <div className={css.Signup}>
      <h2>Бүртгүүлэх</h2>
      <input
        type="text"
        name="username"
        value={signupInput.username}
        onChange={handleInputChange}
        placeholder="Таны нэр"
      />
      <input
        type="email"
        name="email"
        value={signupInput.email}
        onChange={handleInputChange}
        placeholder="Имэйл хаяг"
      />
      <input
        type="password"
        name="password1"
        value={signupInput.password1}
        onChange={handleInputChange}
        placeholder="Нууц үг"
      />
      <input
        type="password"
        name="password2"
        value={signupInput.password2}
        onChange={handleInputChange}
        placeholder="Нүүц үг давтах"
      />
      {signupInput.error && (
        <div style={{ color: "red" }}>{signupInput.error}</div>
      )}
      <Button label="Бүртгүүлэх" type="Primary" clicked={signup} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (username, email, password) =>
      dispatch(actions.signupUser(username, email, password)),
  };
};

export default connect(null, mapDispatchToProps)(SignupPage);
