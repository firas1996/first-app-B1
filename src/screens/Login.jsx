import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState({ email: "", pass: "" });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    if (name == "email") {
      setEmail(value);
    } else {
      setPass(value);
    }
  };
  const submitLogin = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(pass);
    setEmail("");
    setPass("");
  };
  return (
    <div>
      <form onSubmit={submitLogin}>
        <label>Email:</label>
        <input
          name="email"
          value={email}
          onChange={changeHandler}
          type="email"
        />
        <br />
        <label>Password:</label>
        <input
          name="pass"
          value={pass}
          onChange={changeHandler}
          type="password"
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
