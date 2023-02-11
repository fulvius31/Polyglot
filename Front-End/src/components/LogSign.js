import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import icon from "./icon.png";
import Signup from "../components/Signup.js";
import Login from "../components/Login.js";

function LogSign(props) {
  return (
    <div className="row">
      <div className="first-div col-lg-6">
        <h2 className="h2-acc">Learn</h2>
        <p className="p-acc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img className="img-acc" src={icon} alt="icon"></img>
      </div>
      <div className="second-div col-lg-6">
        {props.active === "first" && <Login />}
        {props.active === "second" && <Signup />}
      </div>
    </div>
  );
}

export default LogSign;
