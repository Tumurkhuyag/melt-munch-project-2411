import React, { useState } from "react";
import { Button } from "../../components/General/Button";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginActions";

import css from "./style.module.css";
import { Spinner } from "../../components/General/Spinner";
import { replace, useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };

  const login = () => {
    props.loginUser(loginInput.email, loginInput.password);
  };

  return (
    <div className={css.Login}>
      {props.userId && navigate("/orders", { replace: true })}
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

      {props.firebaseError && (
        <div style={{ color: "red" }}>
          {(() => {
            switch (props.firebaseError) {
              case "INVALID_LOGIN_CREDENTIALS":
                return "Нууц үг буруу байна!";
              case "INVALID_EMAIL":
                return "Имэйл хаяг бүртгэлгүй байна!";
              case "MISSING_PASSWORD":
                return "Нууц үгээ оруулна уу";
              default:
                return props.firebaseError;
            }
          })()}
        </div>
      )}
      {props.logginIn && <Spinner />}
      <Button label="Нэвтрэх" type="Primary" clicked={login} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    logginIn: state.signupLoginReducer.logginIn,
    firebaseError: state.signupLoginReducer.firebaseError,
    firebaseErrorCode: state.signupLoginReducer.firebaseErrorCode,
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) =>
      dispatch(actions.loginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
