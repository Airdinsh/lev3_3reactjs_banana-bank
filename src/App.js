// import logo from './logo.svg';
import React from "react";
import './App.css';
import BananaClock from "./components/BananaClock"
import BananaHeader from "./components/BananaHeader"
import BananaEingabe from "./components/BananaEingabe"


function App() {
  return (
    <div>
      <BananaHeader />
      <BananaClock />
      <BananaEingabe />
    </div>
  );
}

export default App;

