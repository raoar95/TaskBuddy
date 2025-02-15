import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

/* Components */
import { IconLabelInput, Submit } from "../Form/FormComponent";
// import BlinkLoader from "../Loader/Loader";

/* Hooks */
import { useAuth } from "../../context/authProvider.context";
import { useToast } from "../../context/toastProvider.context";

/* Utils */
import {
  emailOtpLogin,
  loginAuth,
  registerAuth,
  requestResetEmail,
  resetPassword,
} from "../../service/api";

/* Interface */
interface IRouteParams {
  resetToken: string;
  otpID: string;
}

/* Components */
import OtpInput from "../Form/OtpInput";

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
  const { toastSuccess, toastError } = useToast();

  const history = useHistory();

  const { isAuth, setIsAuth, userData, setUserData, isLoading, setIsLoading } =
    useAuth();

  // get params
  const { resetToken, otpID } = useParams<IRouteParams>();

  useEffect(() => {
    if (otpID) setIsActiveId("verifyOtp");
    if (resetToken) setIsActiveId("resetPassword");
  }, [resetToken, otpID]);

  const handleSubmit = useCallback(
    async (e: React.MouseEvent<HTMLInputElement>) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        if (isActiveId === "login") {
          const authData = {
            email,
            password,
          };

          await loginAuth(authData).then((data) => {
            setIsAuth(true);
            setUserData(data.data.user);
            toastSuccess(data.message);
            history.push("/");
          });
        }

        if (isActiveId === "otpLogin") {
          await emailOtpLogin({ email }).then((data) => {
            toastSuccess(data.message);
            history.push("/verify-otp/otpLogin");
          });
        }

        if (isActiveId === "register") {
          const authData = {
            fullName,
            email,
            password,
          };

          await registerAuth(authData).then((data) => {
            setIsAuth(true);
            setUserData(data.data.user);
            toastSuccess(data.message);
            history.push("/login");
          });
        }

        if (isActiveId === "forgotEmailRequest") {
          await requestResetEmail({ email }).then((data) => {
            toastSuccess(data.message);
            history.push("/verify-otp/reset");
          });
        }

        if (isActiveId === "resetPassword") {
          await resetPassword({ password }).then((data) => {
            toastSuccess(data.message);
            history.push("/login");
          });
        }
      } catch (err: any) {
        setIsAuth(false);
        toastError(err.errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [
      fullName,
      email,
      password,
      cnfPassword,
      isActiveId,
      history,
      setIsAuth,
      setUserData,
      setIsLoading,
      toastSuccess,
      toastError,
    ]
  );

  const formTitle = {
    login: "Sign In",
    otpLogin: "Sign In With OTP",
    verifyOtp: "Verify OTP",
    register: "Sign Up",
    forgotEmailRequest: "Forgot Password",
    resetPassword: "Reset Password",
  }[isActiveId];

  const formDescription = {
    login: "Login to Access your Account",
    otpLogin: "Enter Email to Get OTP",
    verifyOtp: "Enter OTP Received in Email to Verify",
    register: "Sign Up to Create Account",
    forgotEmailRequest: "Enter Email to Reset Password",
    resetPassword: "Enter New Password",
  }[isActiveId];

  return (
    <>
      <div className="auth_form_container flow-hidden">
        <div className="form_head_container">
          {/* Head */}
          <h1>{formTitle}</h1>
          <p>{formDescription}</p>
        </div>

        {isActiveId === "verifyOtp" ? (
          <OtpInput size={6} otpId={otpID || ""} />
        ) : (
          <>
            {/* form */}
            <form method="post" className="form_input_container">
              {isActiveId === "register" && (
                <IconLabelInput
                  icon={FaRegUser}
                  type="text"
                  labelName="Full Name"
                  required={true}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              )}

              {isActiveId !== "resetPassword" && (
                <IconLabelInput
                  icon={MdMailOutline}
                  type="email"
                  labelName="Email"
                  required={true}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              )}

              {["login", "register", "resetPassword"].includes(isActiveId) && (
                <IconLabelInput
                  icon={RiLockPasswordLine}
                  type="password"
                  labelName="Password"
                  required={true}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              )}

              {["register", "resetPassword"].includes(isActiveId) && (
                <IconLabelInput
                  icon={RiLockPasswordLine}
                  type="password"
                  labelName="Confirm Password"
                  required={true}
                  value={cnfPassword}
                  onChange={(e) => setCnfPassword(e.target.value)}
                />
              )}

              <Submit onClick={(e) => handleSubmit(e)} />
              {/* <button
              type="submit"
              className="myBtn input_submit"
              onClick={(e) => handleSubmit(e)}
            >
              {!isLoading && (isActiveId === "login" ? "Login" : "Register")}{" "}
              {isLoading && <BlinkLoader />}
            </button> */}
            </form>

            {/* Divider & Toggler */}
            {(isActiveId === "login" || isActiveId === "otpLogin") && (
              <>
                {isActiveId === "login" && (
                  <div className="form_text">
                    <Link
                      to="#"
                      onClick={() => setIsActiveId("forgotEmailRequest")}
                    >
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
                  type="button"
                  className="myBtn otp_btn"
                  onClick={() => {
                    setIsActiveId(
                      isActiveId === "login" ? "otpLogin" : "login"
                    );
                  }}
                >
                  {isActiveId === "login"
                    ? "Login with OTP"
                    : "Login with Email"}
                </button>
              </>
            )}

            {/* Text Toggler */}
            {["login", "otpLogin", "register", "forgotEmailRequest"].includes(
              isActiveId
            ) && (
              <div className="form_text">
                {((isActiveId === "login" || isActiveId === "otpLogin") &&
                  "Need an account? ") ||
                  (isActiveId === "register" && "Already have an account? ") ||
                  (isActiveId === "forgotEmailRequest" &&
                    "Remember Password? ")}
                <Link
                  to="#"
                  onClick={() =>
                    setIsActiveId(isActiveId === "login" ? "register" : "login")
                  }
                  className="register_text"
                >
                  {((isActiveId === "login" || isActiveId === "otpLogin") &&
                    " Sign Up Now!") ||
                    ((isActiveId === "register" ||
                      isActiveId === "forgotEmailRequest") &&
                      " Login")}
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default AuthForm;
