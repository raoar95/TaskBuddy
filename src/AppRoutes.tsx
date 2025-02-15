import { Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Components */
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";

const AppRoutes = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Home Routes */}
        <Route exact path="/" component={HomeScreen} />

        {/* Auth Routes */}
        {/* <Route
          exact
          path={["/login", "/verify-otp/:otpID", "/reset-password/:resetToken"]}
          component={LoginScreen}
        /> */}

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
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRoutes;
