import React from "react";
import css from "./style.module.css";
import { Toolbar } from "../../components/Toolbar";
import BurgerBuilder from "../BurgerBuilder";

function App() {
  return (
    <div>
      <Toolbar logo={"Melt & Munch"} />
      <main className={css.Content}>
        <BurgerBuilder />
      </main>
    </div>
  );
}

export default App;
