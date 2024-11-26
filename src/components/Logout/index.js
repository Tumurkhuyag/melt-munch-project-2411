import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "../../redux/actions/signupActions";

const Logout = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    props.logout();

    navigate("/login", { replace: true });
  }, [props]);

  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
