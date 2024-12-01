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
        // LocalStorage -руу firebase -ээс ирж буй result гээд бүх дата -г хадгална
        const token = result.data.idToken;
        const userId = result.data.localId;

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);

        dispatch(signupUserSuccess(token, userId));
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

export const signupUserSuccess = (token, userId) => {
  return {
    type: "SIGNUP_USER_SUCCESS",
    token,
    userId,
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
