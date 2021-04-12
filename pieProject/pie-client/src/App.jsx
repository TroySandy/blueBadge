import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import './App.css';

function App() {
  const [sessionToken, setSessionToken] = useState('')

//react uses Pascal Case, every first letter is Cap. 


  return (
    <div className="App">
      {sessionToken}
      <Navbar />
      <h1>Hello World</h1>
      <p>I am learning react!!</p>
      
    </div>
  );
}

export default App;
