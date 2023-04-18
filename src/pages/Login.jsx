import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email Address</label>
            <input
              type="email"
              label="email address"
              value={email}
              onChange={handleEmailChange}
              placeholder="email address"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              label="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
