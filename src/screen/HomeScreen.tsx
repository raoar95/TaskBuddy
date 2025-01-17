import React from "react";
import { IonContent, IonPage } from "@ionic/react";

/* Components */
import {
  IconInput,
  IconLabelInput,
  Input,
  LabelInput,
} from "../components/Form/FormComponent";

/* Icons */
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <IonContent>
      <div>
        <h1>Home</h1>
        <Link to="/login">Go To Login Page</Link>
      </div>
    </IonContent>
  );
};

export default Home;
