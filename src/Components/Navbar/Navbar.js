import React, { useState } from "react";
import "./Navbar.css";
import swal from "sweetalert";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [popup, shopopup] = useState(false);
  const popupHandler = () => {
    shopopup(!popup);
  };

  const closePopupHandler = () => {
    shopopup(false);
  };
  //    const showAlert = () => {
  //         swal({
  //             title: "Company Information",
  //             text: "Company",
  //             text:"Geeksynergy Technologies Pvt Ltd",
  //             text: "Company",
  //             text:"Geeksynergy Technologies Pvt Ltd",
  //             buttons:false
  //           });
  //     }

  return (
    <div>
      <div className="nav-bar-flex-div">
        <p onClick={popupHandler}>Company Info</p>
      </div>
      <div>
        {popup ? (
          <div>
            <div className="pop-up-flex-div">
              <div className="company-info-main-div-card">
                <div className="company-info-main-div">
                 
                    
                  <p className="close-btn-in-card"  onClick={closePopupHandler}>Close</p>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                <h3>Company Information</h3>
                </div>
                <div style={{padding:"60px", paddingTop:"20px"}}>
                <div className="company-info-main-div">
                  <h3>Company</h3>
                  <p>Geeksynergy Technologies Pvt Ltd</p>
                </div>

                <div className="company-info-main-div">
                  <h3>Address</h3>
                  <p>Sanjayanagar, Bengaluru-56</p>
                </div>

                <div className="company-info-main-div">
                  <h3>Phone</h3>
                  <p>XXXXXXXXX09</p>
                </div>
                <div className="company-info-main-div">
                  <h3>Email:</h3>
                  <p>XXXXXX@gmail.com</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
