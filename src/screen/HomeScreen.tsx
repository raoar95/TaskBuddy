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

const Home: React.FC = () => {
  return (
    <IonContent>
      <div>
        <h1>Home</h1>

        <LabelInput
          // icon={IoMailOutline}
          type="password"
          name="myInput"
          labelName="Email"
          placeholder="Enter Email"
          autoComplete="off"
          required={true}
        />
      </div>
    </IonContent>
  );
};

export default Home;
