import React, { useState, useEffect } from "react";
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

  return (
    <div>
      <form>
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
        <button onClick={(e) => loginToggle(e)}>Login/SignUp</button>
        <br />
        <button type="submit">Submit User Data</button>
      </form>
    </div>
  );
};

export default Auth;
