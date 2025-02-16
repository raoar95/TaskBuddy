import { Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Components */
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";
import { AuthProvider } from "./context/authProvider.context";

const AppRoutes = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        {/* UnSecure Routes */}
        <Route exact path="/" component={HomeScreen} />

        {/* Secure Routes */}
        <AuthProvider>
          <Route exact path="/login" component={LoginScreen} />
          <Route
            exact
            path="/verify-otp/:otpID"
            render={(props) => (
              <LoginScreen key={props.match.params.otpID} {...props} />
            )}
          />
          <Route
            exact
            path="/reset-password/:resetToken"
            render={(props) => (
              <LoginScreen key={props.match.params.resetToken} {...props} />
            )}
          />
        </AuthProvider>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRoutes;
