import { IonApp, setupIonicReact } from "@ionic/react";

/* Components */
import AppRoutes from "./AppRoutes";

/* Styles */
import "./theme/variables.css";
import "./theme/global.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <AppRoutes />
  </IonApp>
);

export default App;
