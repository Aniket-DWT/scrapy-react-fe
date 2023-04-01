import React, { useState } from "react";

const SignUp = () => {
  console.log("first");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const collectData = () => {
    console.log(name, email, password);
  };

  return (
    <div className="ragistar">
      <h1>SignUp</h1>
      <input
        className="inputbox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        className="inputbox"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email "
      />
      <input
        className="inputbox"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={collectData} type="submit">
        Sign up
      </button>
    </div>
  );
};

export default SignUp;
