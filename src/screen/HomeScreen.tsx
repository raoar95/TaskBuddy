import React from "react";
import { Input } from "../components/Form/FormComponent";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>

      <Input type="text" name="myInput" id="myInput" />
    </div>
  );
};

export default Home;
