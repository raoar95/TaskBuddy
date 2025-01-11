import React from "react";
import { IonContent } from "@ionic/react";

/* Components */
import AuthForm from "../components/LoginScreen/AuthForm";

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
