import React, { Component } from "react";
import css from "./style.module.css";
import { Toolbar } from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import { SideBar } from "../../components/SideBar";
import OrderPage from "../OrderPage";
import { Route, Routes } from "react-router-dom";

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
          <Routes>
            <Route path="/" Component={BurgerPage} />
            <Route path="/orders" Component={OrderPage} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
