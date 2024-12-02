import axios from "../../axios-orders";
import { loginUserSuccess } from "./loginActions";

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
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("expireDate");
  return {
    type: "LOGOUT",
  };
};

export const autoLogoutAfterDuration = (duration) => {
  return function (dispatch) {
    // Token refresh хийж, шинэчлэх
    // https://securetoken.googleapis.com/v1/token?key=[API_KEY]

    // axios
    //   .post(
    //     "https://securetoken.googleapis.com/v1/token?key=AIzaSyBffLVGO87vDaoeqgE6_GrqmvTFO-SDMtM",
    //     {
    //       grant_type: "refresh_token",
    //       refresh_token: localStorage.get("refresh_token"),
    //     }
    //   )
    //   .then((result) => {
    //     // LocalStorage -руу firebase -ээс ирж буй result гээд бүх дата -г хадгална
    //     const token = result.data.id_token;
    //     const userId = result.data.user_id;

    //     // LocalStorage -руу firebase -ээс ирж буй result гээд бүх дата -г хадгална
    //     const token = result.data.idToken;
    //     const userId = result.data.localId;
    //     const expiresIn = result.data.expiresIn;
    //     const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
    //     const refreshToken = result.data.refreshToken;

    //     localStorage.setItem("token", token);
    //     localStorage.setItem("userId", userId);
    //     localStorage.setItem("expireDate", expireDate);
    //     localStorage.setItem("refreshToken", refreshToken);

    //     dispatch(loginUserSuccess(token, userId));
    //   })
    //   .catch((err) => {
    //     dispatch(signupUserError(err));
    //   });

    // AutoLogout хийх
    setTimeout(() => {
      dispatch(logout());
    }, duration);
  };
};
