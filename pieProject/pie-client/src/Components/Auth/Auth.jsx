import React, { useState } from "react";
import "./Auth.css"; //css imports are the last thing imported

const Auth = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  const title = () => {
    return login ? "Login" : "SignUp";
  };

  const loginToggle = (e) => {
    e.preventDefault();

    setLogin(!login);

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };

const signupFields = () => {
    return !login ? (
        <div>
            <label htmlFor="firstName">First Name:</label>
            <br/>
            <input type="text" id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <br/>
            <label htmlFor="lastName">Last Name:</label>
            <br/>
            <input type="text" id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <br/>
            {/* <input type="text" id='firstName' value={firstName}/> */}
            <br/>
        </div>
    ) : null
}

const handleSubmit = (e) => {
  e.preventDefault();
  const url = login ? "http://localhost:4000/user/login" : "http://localhost:4000/user/register"
  const bodyObj = login ? {
    email,
    password,
    } : {
      email,
      password,
      firstName,
      lastName
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify(bodyObj),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(json => console.log(json))
}

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <h1>{title()}</h1>
        {signupFields()}
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => {
            return setEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            return setPassword(e.target.value);
          }}
        />
        <br />
        <button onClick={(e) => loginToggle(e)} className='button'>Login/SignUp</button>
        <br />
        <button type="submit" onSubmit={e => handleSubmit(e)} className='button'>Submit User Data</button>
      </form>
    </div>
  );
};

export default Auth;
