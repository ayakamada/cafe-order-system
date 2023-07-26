import React from "react";
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
        <div className="text-center">
          <span className="block text-zinc-700 text-xs mb-2">
            Photos From{" "}
            <a className="text-sky-700" href="https://unsplash.com/">
              unsplash.com
            </a>
          </span>
          <span className="block text-zinc-700 text-xs">
            Created by{" "}
            <a className="text-sky-700" href="https://github.com/ayakamada/cafe-order-system">
              ayakamada
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
