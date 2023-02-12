import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import swal from "sweetalert";
import Navbar from "../Navbar/Navbar";

const Signup = () => {
  const navigate = useNavigate();

  const [input, setinput] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
    profession: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      input.name != "" &&
      input.email != "" &&
      input.phonenumber != "" &&
      input.password != "" &&
      input.profession != ""
    ) {
      localStorage.setItem("User", JSON.stringify(input));
      swal({
        title: "Sign Up Successfull!!",
        icon: "success",
      });
      navigate("/login");
    } else {
      swal({
        title: "Please Fill all the Details...",
        icon: "warning",
      });
    }
  };

  return (
    <div className="signup-pagb-bg-div">
      <form>
        <div className="signup-container-for-movies">
          <div className="signup-card-for-movies">
            <div className="signup-card-input-div">
              <div className="signup-card-input-div-lable">
                <label>Name </label>
              </div>
              <div className="signup-card-input-div-input-tag">
                <input
                  type="text"
                  name="name"
                  placeholder="Name..."
                  value={input.name}
                  onChange={(e) =>
                    setinput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>

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
                <label>Phone </label>
              </div>
              <div className="signup-card-input-div-input-tag">
                <input
                  type="number"
                  name="phonenumber"
                  placeholder="Phone Number..."
                  value={input.phonenumber}
                  onChange={(e) =>
                    setinput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="signup-card-input-div">
              <div className="signup-card-input-div-lable">
                <label>Profession </label>
              </div>
              <div className="signup-card-input-div-input-tag">
                <select
                  name="profession"
                  value={input.profession}
                  onChange={(e) =>
                    setinput({ ...input, [e.target.name]: e.target.value })
                  }
                >
                  <option>Select Profession</option>
                  <option value="softwaredeveloper">Software Developer</option>
                  <option value="uidesigner">UI Designer</option>
                  <option value="marketing">Marketing</option>
                  <option value="hr">HR</option>
                </select>
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
                onClick={handleSubmit}
                className="signup-btn"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
