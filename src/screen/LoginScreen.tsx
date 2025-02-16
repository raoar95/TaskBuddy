import React from "react";
import { IonContent } from "@ionic/react";

/* Components */
import AuthForm from "../components/Form/AuthForm";

/* Styles */
import "./LoginScreen.scss";

const LoginScreen: React.FC = () => {
  return (
    <>
      <IonContent>
        <div className="auth_container">
          <AuthForm />
        </div>
      </IonContent>
    </>
  );
};

export default LoginScreen;
