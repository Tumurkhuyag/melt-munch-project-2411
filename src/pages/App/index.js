import React, { Component } from "react";
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

class App extends Component {
  state = { showSidebar: false };

  toggleSidebar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    // console.log(this.state.showSidebar);
    return (
      <div>
        <Toolbar
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <main className={css.Content}>
          {this.props.userId && <div>Сайн уу, {this.props.userId}</div>}

          <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<BurgerPage />} />
            <Route path="/ship/*" element={<ShippingPage />} />
            <Route path="/orders" element={<OrderPage />} />
          </Routes>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};

export default connect(mapStateToProps)(App);
