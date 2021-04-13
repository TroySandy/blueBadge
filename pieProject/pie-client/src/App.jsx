import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Auth from "./Components/Auth/Auth";
import "./App.css";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  //react uses Pascal Case, every first letter is Cap.

  return (
    <div className="App">
      {sessionToken}
      <Navbar />
      <Auth />
      <h1>Hello World</h1>
      <p>I am learning react!!</p>
    </div>
  );
}

export default App;
