import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [input, setinput] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("User", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <div>
      <form>
        <div className="signup-container-for-store">
          <div className="signup-card-for-store">
            <div>
              <label>Name : </label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={(e) =>
                  setinput({ ...input, [e.target.name]: e.target.value })
                }
              />
            </div>

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
              <label>Phone : </label>
              <input
                type="text"
                name="phonenumber"
                value={input.phonenumber}
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

            <button type="submit" onClick={handleSubmit}>
              SignUp
            </button>
          </div>
          <Link to="/">
            <button>Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
