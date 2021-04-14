import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <HomePage />
      </div>
    </BrowserRouter>
  );
}

export default App;
