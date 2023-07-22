import React from "react";
import logo from "./logo.svg";
import "./App.css";

import DrinkOrderForm from "./components/DrinkOrderForm";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <DrinkOrderForm />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
