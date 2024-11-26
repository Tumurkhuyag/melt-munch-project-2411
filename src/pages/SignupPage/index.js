import React, { useState } from "react";
import css from "./style.module.css";
import { Button } from "../../components/General/Button";
import * as actions from "../../redux/actions/signupActions";
import { connect } from "react-redux";
import { Spinner } from "../../components/General/Spinner";
import { useNavigate } from "react-router-dom";

const SignupPage = (props) => {
  const navigate = useNavigate();
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
      {props.userId && navigate("/orders", { replace: true })}
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
      {props.firebaseError && (
        <div style={{ color: "red" }}>
          {(() => {
            switch (props.firebaseError) {
              case "WEAK_PASSWORD : Password should be at least 6 characters":
                return "6 -с их тэмдэгт бүхий нууц үг зохионо уу!";
              case "EMAIL_EXISTS":
                return "Имэйл хаяг бүртгэлтэй байна!";
              case "auth/network-request-failed":
                return "Network error. Please check your internet connection.";
              default:
                return props.firebaseError;
            }
          })()}
        </div>
      )}
      {props.saving && <Spinner />}
      <Button label="Бүртгүүлэх" type="Primary" clicked={signup} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saving: state.signupReducer.saving,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (username, email, password) =>
      dispatch(actions.signupUser(username, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
