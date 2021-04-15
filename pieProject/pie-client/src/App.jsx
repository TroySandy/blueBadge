import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Auth from "./Components/Auth/Auth";
import Pies from './Components/Pies/Pies.jsx'
import "./App.css";

function App() {
  const [sessionToken, setSessionToken] = useState('');

  const viewConductor = () => {
    return sessionToken !== '' ? <Pies token={sessionToken} /> : <Auth />
  }

  return (
    <div className="App">
      {sessionToken}
      <Navbar />
      {viewConductor()}
    </div>
  );
}

export default App;
