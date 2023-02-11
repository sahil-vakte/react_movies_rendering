import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import swal from 'sweetalert';

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
      swal({
        title: "Log in Successfull!!",
        icon: "success",
      })
      navigate("/homepage");
    } else {
      swal({
        title: "Please Submit Correct Email and Password...",
        icon: "warning",
      })
    }
  };

  return (
    <div className="signup-pagb-bg-div">
      <form>
        <div className="signup-container-for-movies">
          <div className="signup-card-for-movies">
            <div className="signup-card-input-div">
              <div className="signup-card-input-div-lable">
                <label>Email </label>
              </div>
              <div className="signup-card-input-div-input-tag">
                <input
                  type="text"
                  name="email"
                  placeholder="Email..."
                  value={input.email}
                  onChange={(e) =>
                    setinput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="signup-card-input-div">
              <div className="signup-card-input-div-lable">
                <label>Password </label>
              </div>
              <div className="signup-card-input-div-input-tag">
                <input
                  type="password"
                  name="password"
                  placeholder="Password..."
                  value={input.password}
                  onChange={(e) =>
                    setinput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="signup-btn-main-div">
              <button
                type="submit"
                onClick={handleLogin}
                className="signup-btn"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
