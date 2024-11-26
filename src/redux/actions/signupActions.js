import axios from "../../axios-orders";

export const signupUser = (username, email, password) => {
  return function (dispatch) {
    dispatch(signupUserStart());

    const data = {
      username,
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBffLVGO87vDaoeqgE6_GrqmvTFO-SDMtM",
        data
      )
      .then((result) => {
        dispatch(signupUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(signupUserError(err));
      });

    //
  };
};

export const signupUserStart = () => {
  return {
    type: "SIGNUP_USER_START",
  };
};

export const signupUserSuccess = (data) => {
  return {
    type: "SIGNUP_USER_SUCCESS",
    data,
  };
};

export const signupUserError = (error) => {
  return {
    type: "SIGNUP_USER_ERROR",
    error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return {
    type: "LOGOUT",
  };
};
