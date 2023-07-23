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
      <footer className="py-20 ">
        <span className="text-zinc-700 text-xs">
          Photos From{" "}
          <a className="text-sky-700" href="https://unsplash.com/">
            unsplash.com
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
