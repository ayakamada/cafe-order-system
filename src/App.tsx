import React from "react";
import logo from "./logo.svg";
import "./App.css";

import DrinkOrderForm from "./components/DrinkOrderForm";

function App() {
  return (
    <div className="App bg-gray-100 pt-20 min-h-screen">
      <header></header>
      <main>
        <DrinkOrderForm />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
