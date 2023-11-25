import { useState, useContext } from "react";
import Login from "./Login";
import Sidebar from "./Sidebar";
import AddOns from "./AddOns";
import Plans from "./Plans";
import Summary from "./Summary";
import Submitted from "./Submitted";
import FormProvider from "../context/FormContexts";

const Container = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="flex flex-row justify-around">
      <Sidebar setActiveStep={setActiveStep} />
      {activeStep === 1 && <Login />}
      {activeStep === 2 && <Plans />}
      {activeStep === 3 && <AddOns />}
      {activeStep === 4 && <Summary />}
      {activeStep === 5 && <Submitted />}
    </div>
  );
};

export default Container;
