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
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRoutes;
