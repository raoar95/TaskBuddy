import { Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Components */
import HomeScreen from "./screen/HomeScreen";

const AppRoutes = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Home Routes */}
        <Route exact path="/">
          <HomeScreen />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRoutes;
