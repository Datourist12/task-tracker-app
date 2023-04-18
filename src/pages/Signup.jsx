import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
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
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user, " logged in");
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
          <button type="submit">Create</button>
        </form>
        <Link to="/login">Already a user? Login here.</Link>
      </section>
    </div>
  );
};

export default Signup;
