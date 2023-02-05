import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import icon from "./icon.png";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import { BsXCircleFill, BsCheckCircleFill } from "react-icons/bs";
import { useCookies } from "react-cookie";

function Signup() {
  const [userSignUp, setUserSignUp] = useState("");
  const [messUserSignUp, setMessUserSignUp] = useState("");

  const [passLogin, setPassLogin] = useState("");
  const [messPassLogin, setMessPassLogin] = useState("");
  const [passSignUp, setPassSignUp] = useState("");
  const [messPassSignUp, setMessPassSignUp] = useState("");

  const [emailLogin, setEmailLogin] = React.useState("");
  const [messLogin, setMessLogin] = React.useState("");
  const [emailSignUp, setEmailSignUp] = React.useState("");
  const [messSignUp, setMessSignUp] = React.useState("");

  const [setCookie] = useCookies(["user"]);

  const login = (e) => {
    e.preventDefault();
    setEmailLogin("");
    setMessLogin("");
    setPassLogin("");
    setMessPassLogin("");
    setCookie("user", emailLogin, { path: "/" });
  };

  const reset = () => {
    setEmailLogin("");
    setMessLogin("");
    setPassLogin("");
    setMessPassLogin("");

    setUserSignUp("");
    setMessUserSignUp("");
    setPassSignUp("");
    setMessPassSignUp("");
    setEmailSignUp("");
    setMessSignUp("");
  };
  const checkEmail = () => {
    const regExp = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    setMessLogin((e) => {
      if (regExp.test(emailLogin)) {
        return setMessLogin(
          <span className="span-acc-pass">
            <BsCheckCircleFill className="icon-acc" /> Valid Email
          </span>
        );
      } else if (!regExp.test(emailLogin) && emailLogin !== "") {
        return setMessLogin(
          <span className="span-acc-error">
            <BsXCircleFill className="icon-acc" /> Invalid Email
          </span>
        );
      } else {
        return setMessLogin(<span className="span-acc-error"></span>);
      }
    });
    setMessSignUp((e) => {
      if (regExp.test(emailSignUp)) {
        return setMessSignUp(
          <span className="span-acc-pass">
            <BsCheckCircleFill className="icon-acc" /> Valid Email
          </span>
        );
      } else if (!regExp.test(emailSignUp) && emailSignUp !== "") {
        return setMessSignUp(
          <span className="span-acc-error">
            <BsXCircleFill className="icon-acc" /> Invalid Email
          </span>
        );
      } else {
        return setMessSignUp(<span className="span-acc-error"></span>);
      }
    });
  };

  const checkUser = () => {
    setMessUserSignUp((e) => {
      if (userSignUp.length < 8 && userSignUp.length >= 1) {
        return setMessUserSignUp(
          <span className="span-acc-error">
            <BsXCircleFill className="icon-acc" /> Incorrect Username
          </span>
        );
      } else if (userSignUp.length === 0) {
        return setMessUserSignUp(<span className="span-acc-error"></span>);
      } else {
        return setMessUserSignUp(
          <span className="span-acc-pass">
            <BsCheckCircleFill className="icon-acc" /> Valid Username
          </span>
        );
      }
    });
  };

  const checkPass = () => {
    setMessPassLogin((e) => {
      if (passLogin.length < 8 && passLogin.length >= 1) {
        return setMessPassLogin(
          <span className="span-acc-error">
            <BsXCircleFill className="icon-acc" /> Incorrect Password
          </span>
        );
      } else if (passLogin.length === 0) {
        return setMessPassLogin(<span className="span-acc-error"></span>);
      } else {
        return setMessPassLogin(
          <span className="span-acc-pass">
            <BsCheckCircleFill className="icon-acc" /> Valid Password
          </span>
        );
      }
    });
    setMessPassSignUp((e) => {
      if (passSignUp.length < 8 && passSignUp.length >= 1) {
        return setMessPassSignUp(
          <span className="span-acc-error">
            <BsXCircleFill className="icon-acc" /> Incorrect Password
          </span>
        );
      } else if (passSignUp.length === 0) {
        return setMessPassSignUp(<span className="span-acc-error"></span>);
      } else {
        return setMessPassSignUp(
          <span className="span-acc-pass">
            <BsCheckCircleFill className="icon-acc" /> Valid Password
          </span>
        );
      }
    });
  };
  return (
    <div className="App">
      <div className="row">
        <div className="first-div col-md-6">
          <h2 className="h2-acc">PolyGlot</h2>
          <p className="p-acc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img className="img-acc" src={icon} alt="icon"></img>
        </div>
        <div className="second-div col-md-6">
          <div className="sign-div">
            <Tabs defaultActiveKey="first" fill onSelect={reset}>
              <Tab tabClassName="title-beauty" eventKey="first" title="LOGIN">
                <div id="con" className="contact">
                  <p className="about-p">Signin to Continue</p>
                  <div className="row form-row">
                    <div className="col-md">
                      <Form className="row g-3" id="form-id">
                        <div className="col-md-12">
                          <Form.Control
                            type="text"
                            className="form-control input-acc"
                            id="inputEmail4"
                            placeholder="Email"
                            value={emailLogin}
                            onChange={(e) => setEmailLogin(e.target.value)}
                            onKeyUp={checkEmail}
                          />
                        </div>
                        {messLogin}
                        <div className="col-md-12">
                          <Form.Control
                            type="text"
                            className="form-control input-acc"
                            id="inputPassword"
                            placeholder="Password"
                            value={passLogin}
                            onKeyUp={checkPass}
                            onChange={(e) => setPassLogin(e.target.value)}
                          />
                        </div>
                        {messPassLogin}
                        <div className="btn-div">
                          <Button
                            type="submit"
                            className="btn btn-secondary btn-md btn-acc"
                            onClick={(e) => login(e)}
                          >
                            LOGIN
                          </Button>
                        </div>
                      </Form>
                      <div className="acc-div-a">
                        <span>Don't have an account? </span>
                        <a className="a-acc" href="#first">
                          Sign Up
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab tabClassName="title-beauty" eventKey="second" title="SIGNUP">
                <div id="con" className="contact">
                  <p className="about-p">Create an Account</p>
                  <div className="row form-row">
                    <div className="col-md">
                      <Form className="row g-3">
                        <div className="col-md-12">
                          <Form.Control
                            type="text"
                            className="form-control input-acc"
                            id="inputName4"
                            placeHolder=" Enter a Username"
                            value={userSignUp}
                            onKeyUp={checkUser}
                            onChange={(e) => setUserSignUp(e.target.value)}
                          />
                        </div>
                        {messUserSignUp}
                        <div className="col-md-12">
                          <Form.Control
                            type="text"
                            className="form-control input-acc"
                            id="inputEmail4"
                            placeholder="Enter an Email"
                            value={emailSignUp}
                            onChange={(e) => setEmailSignUp(e.target.value)}
                            onKeyUp={checkEmail}
                          />
                        </div>
                        {messSignUp}
                        <div className="col-md-12">
                          <Form.Control
                            type="text"
                            className="form-control input-acc"
                            id="inputPassword"
                            placeholder="Enter a Password"
                            value={passSignUp}
                            onKeyUp={checkPass}
                            onChange={(e) => setPassSignUp(e.target.value)}
                          />
                        </div>
                        {messPassSignUp}
                        <div className="btn-div">
                          <Button
                            type="submit"
                            className="btn btn-secondary btn-md btn-acc"
                            //onClick={error}
                          >
                            SIGNUP
                          </Button>
                        </div>
                      </Form>
                      <div className="acc-div-a">
                        <span>Already have an account? </span>
                        <a className="a-acc" href="#first">
                          Sign in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
