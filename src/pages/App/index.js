import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import { Toolbar } from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import { SideBar } from "../../components/SideBar";
import OrderPage from "../OrderPage";
import { Route, Routes, Navigate } from "react-router-dom";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import Logout from "../../components/Logout";

const App = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <div>
      <Toolbar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <SideBar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <main className={css.Content}>
        {props.userId ? (
          <Fragment>
            <div>Сайн уу, {props.userId}</div>
            <Routes>
              <Route path="/logout" element={<Logout />} />
              <Route path="/" element={<BurgerPage />} />
              <Route path="/ship/*" element={<ShippingPage />} />
              <Route path="/orders" element={<OrderPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Fragment>
        ) : (
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};

export default connect(mapStateToProps)(App);
