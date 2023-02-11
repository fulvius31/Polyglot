import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import { BsXCircleFill, BsCheckCircleFill } from "react-icons/bs";

export function checkEmail(setMessage, setMessageEmail, email) {
  const regExp = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/;
  setMessage((e) => {
    if (regExp.test(email)) {
      setMessageEmail("Valid Email");
      return setMessage(
        <span className="span-acc-pass">
          <BsCheckCircleFill className="icon-acc" /> Valid Email
        </span>
      );
    } else if (!regExp.test(email) && email !== "") {
      setMessageEmail("");
      return setMessage(
        <span className="span-acc-error">
          <BsXCircleFill className="icon-acc" /> Invalid Email
        </span>
      );
    } else {
      setMessageEmail("");
      return setMessage(<span className="span-acc-error"></span>);
    }
  });
}

export function checkPass(setMessage, setMessagePassword, password) {
  setMessage((e) => {
    if (password.length < 8 && password.length >= 1) {
      setMessagePassword("");
      return setMessage(
        <span className="span-acc-error">
          <BsXCircleFill className="icon-acc" /> Incorrect Password
        </span>
      );
    } else if (password.length === 0) {
      setMessagePassword("");
      return setMessage(<span className="span-acc-error"></span>);
    } else {
      setMessagePassword("Valid Password");
      return setMessage(
        <span className="span-acc-pass">
          <BsCheckCircleFill className="icon-acc" /> Valid Password
        </span>
      );
    }
  });
}

export function checkUser(setMessage, setMessageUsername, username) {
  setMessage((e) => {
    if (username.length < 8 && username.length >= 1) {
      setMessageUsername("");
      return setMessage(
        <span className="span-acc-error">
          <BsXCircleFill className="icon-acc" /> Incorrect Username
        </span>
      );
    } else if (username.length === 0) {
      setMessageUsername("");
      return setMessage(<span className="span-acc-error"></span>);
    } else {
      setMessageUsername("Valid Username");
      return setMessage(
        <span className="span-acc-pass">
          <BsCheckCircleFill className="icon-acc" /> Valid Username
        </span>
      );
    }
  });
}
