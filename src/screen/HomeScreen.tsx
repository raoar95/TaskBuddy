import React from "react";
import { IonContent } from "@ionic/react";

/* Components */
import {
  Checkbox,
  IconInput,
  IconLabelInput,
  MyInput,
  Radio,
  SingleSelect,
  Textarea,
} from "../components/Form/FormComponent";

/* Icons */
import { Link } from "react-router-dom";
import OtpInput from "../components/Form/OtpInput";
import { logoutUser } from "../service/api";
import { useAuth } from "../context/authProvider.context";
import Toast from "../components/Toast/Toast";

const Home: React.FC = () => {
  const { userData } = useAuth();

  const handleLogout = () => {
    // setIsLoading(true);

    // if (token) {
    logoutUser()
      .then((response) => {
        console.log("response");

        if (response && response.status === 200) {
          // setIsLoading(false);
          localStorage.removeItem("userData");
          // toastSuccess(response.message);
          // navigate("/loginAuthentication/");
        }
      })
      .catch((err) => {
        // setIsLoading(false);
        // toastError(err.errorMessage);
        console.error("Logout Error:", err);
      });
    // }
  };

  return (
    <IonContent className="ion-padding">
      {/* <Toast isVisible={true} type="Success" message="Success" /> */}

      <div style={{ padding: "16px" }}>
        <h1>Home</h1>
        <Link to="/login">Go To Login Page</Link>

        <br />
        <br />

        <MyInput
          type="text"
          labelName="Label"
          placeholder="Input"
          required={true}
        />

        <br />

        {/* <MyInput type="text" placeholder="Input" required={true} /> */}

        <br />
        <br />

        <OtpInput size={6} otpId="" />

        {/* <LabelInput type="text" labelName="Label" placeholder="Label Input" /> */}

        <br />
        <br />

        <Checkbox id="cb1" labelName="Checkbox 1" />
        <Checkbox id="cb2" labelName="Checkbox 2" />

        <br />
        <br />

        <Radio id="cb1" labelName="Radio 1" />
        <Radio id="cb2" labelName="Radio 2" />

        <br />
        <br />

        <button onClick={() => handleLogout()}>Logout</button>

        {/* <SingleSelect
          labelName="Select"
          options={["Option 1", "Option 2", "Option 3"]}
        /> */}

        <Textarea id="ta1" labelName="Textarea" placeholder="Textarea" />

        <h1>{userData?.fullName}</h1>
      </div>
    </IonContent>
  );
};

export default Home;
