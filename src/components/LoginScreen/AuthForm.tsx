import React, { useState } from "react";

/* Components */
import { IconLabelInput, Submit } from "../Form/FormComponent";

/* Icons */
import { FaRegUser } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

/* Styles */
import "./AuthForm.scss";
import { Link } from "react-router-dom";

const AuthForm: React.FC = () => {
  const [isActiveId, setIsActiveId] = useState("login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");

  return (
    <div className="auth_form_container flow-hidden">
      <div className="form_head_container">
        {/* Head */}
        <h1>
          {(isActiveId === "login" && "Sign In") ||
            (isActiveId === "otp" && "Sign In With OTP") ||
            (isActiveId === "register" && "Sign Up") ||
            (isActiveId === "forgot" && "Forgot Password")}
        </h1>
        <p>
          {(isActiveId === "login" && "Login to Access your Account") ||
            (isActiveId === "otp" && "Enter Email to Get OTP") ||
            (isActiveId === "register" && "Sing Up to Create Account") ||
            (isActiveId === "forgot" && "Enter Email to Reset Password")}
        </p>
      </div>

      {/* form */}
      <form method="post" className="form_input_container">
        {isActiveId === "register" && (
          <IconLabelInput
            icon={FaRegUser}
            type="text"
            labelName="Full Name"
            required={true}
          />
        )}

        <IconLabelInput
          icon={MdMailOutline}
          type="email"
          labelName="Email"
          required={true}
        />

        {(isActiveId === "login" || isActiveId === "register") && (
          <IconLabelInput
            icon={RiLockPasswordLine}
            type="password"
            labelName="Password"
            required={true}
          />
        )}

        {isActiveId === "register" && (
          <IconLabelInput
            icon={RiLockPasswordLine}
            type="password"
            labelName="Confirm Password"
            required={true}
          />
        )}

        <Submit />
      </form>

      {/* Divider & Toggler */}
      {(isActiveId === "login" || isActiveId === "otp") && (
        <>
          {isActiveId === "login" && (
            <div className="form_text">
              <Link to="#" onClick={() => setIsActiveId("forgot")}>
                Forgot Password?
              </Link>
            </div>
          )}

          <div className="form_divider">
            <div className="bar">
              <span className="or">OR</span>
            </div>
          </div>
          <button
            className="myBtn otp_btn"
            onClick={() => {
              setIsActiveId(isActiveId === "login" ? "otp" : "login");
            }}
          >
            {isActiveId === "login" ? "Login With OTP" : "Login With Email"}
          </button>
        </>
      )}

      {/* Text Toggler */}
      {(isActiveId === "login" ||
        isActiveId === "register" ||
        isActiveId === "forgot") && (
        <div className="form_text">
          {(isActiveId === "login" && "Need an account? ") ||
            (isActiveId === "register" && "Already have an account? ") ||
            (isActiveId === "forgot" && "Remember Password? ")}
          <Link
            to="#"
            onClick={() =>
              setIsActiveId(isActiveId === "login" ? "register" : "login")
            }
            className="register_text"
          >
            {(isActiveId === "login" && " Sign Up Now!") ||
              ((isActiveId === "register" || isActiveId === "forgot") &&
                " Login")}
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
