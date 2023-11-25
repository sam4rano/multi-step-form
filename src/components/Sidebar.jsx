import { useState } from "react";
import BgImage from "../assets/images/bg-sidebar-desktop.svg";

const Sidebar = () => {
  // const [activeStep, setActiveStep] = useState(1);

  const sidebarStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "20px",
    height: "100vh",
    width: "20%",
  };

  // const getStepStyle = (step) => {
  //   return {
  //     backgroundColor: activeStep === step ? "#333" : "transparent",
  //     color: activeStep === step ? "#fff" : "#333",
  //     cursor: "pointer",
  //   };
  // };

  // const handleItemClick = (step) => {
  //   onSidebarClick(step);
  //   setActiveStep(step);
  //onClick={() => handleItemClick(1)}
  //style={getStepStyle(1)}
  // };
  return (
    <div style={sidebarStyle}>
      <div className="flex flex-col gap-[20px] pt-[40px]">
        <div className="flex flex-row justify-center">
          <p className=" border-neutral text-neutral pr-[20px]">1</p>
          <div>
            <h2 className="text-transparent">STEP ONE</h2>
            <h1 className="text-neutral">YOUR INFO</h1>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <p className="pr-[20px] border-neutral text-neutral ">2</p>
          <div>
            <h5 className="text-neutral">STEP TWO</h5>
            <h3 className="text-neutral">SELECT PLAN</h3>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <p className="pr-[20px] border-neutral text-neutral">3</p>
          <div>
            <h5 className="text-neutral">STEP THREE</h5>
            <h3 className="text-neutral">ADD ONS</h3>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <p className="pr-[20px] border-neutral text-neutral">4</p>
          <div>
            <h5 className="text-neutral">STEP FOUR</h5>
            <h3 className="text-neutral">SUMMARY</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
