import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [input, setinput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("User"));
    console.log("loggeduser", loggeduser);

    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      navigate("/homepage");
    } else {
      alert("Wrong Email or Password");
    }
  };

  return (
    <div>
      <form>
        <div className="signup-container-for-store">
          <div className="signup-card-for-store">
            <div>
              <label>Email : </label>
              <input
                type="text"
                name="email"
                value={input.email}
                onChange={(e) =>
                  setinput({ ...input, [e.target.name]: e.target.value })
                }
              />
            </div>

            <div>
              <label>Password : </label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={(e) =>
                  setinput({ ...input, [e.target.name]: e.target.value })
                }
              />
            </div>

            <button type="submit" onClick={handleLogin}>
              Login
            </button>
          </div>
          <Link to="/">
            <button>Signup</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
