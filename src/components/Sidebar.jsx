import { useState, useRef } from "react";
import BgImage from "../assets/images/bg-sidebar-desktop.svg";

const Sidebar = ({ setActiveStep }) => {


  const stepOneRef = useRef(null);
  const stepTwoRef = useRef(null);
  const stepThreeRef = useRef(null);
  const stepFourRef = useRef(null);
  const sidebarStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "20px",
    height: "100vh",
    width: "30%",
  };

  const handleStepClick = (step) => {
    setActiveStep(step);
   
  };
  return (
    <div style={sidebarStyle}>
      <div className="flex flex-col gap-[20px] pt-[40px]">
        <div className="flex flex-row justify-center">
          <span className="rounded-[100%] border-neutral text-neutral pr-[20px]">1</span>
          <div ref={stepOneRef}>
            <h2 className="text-bg-grey">STEP ONE</h2>
            <h1 className="text-neutral">YOUR INFO</h1>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <p className="pr-[20px] border-neutral text-neutral ">2</p>
          <div ref={stepTwoRef}>
            <h2 className="text-bg-grey">STEP TWO</h2>
            <h1 className="text-neutral">SELECT PLAN</h1>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <p className="pr-[20px] border-neutral text-neutral">3</p>
          <div ref={stepThreeRef}>
            <h2 className="text-bg-grey">STEP THREE</h2>
            <h1 className="text-neutral">ADD ONS</h1>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <p className="pr-[20px] border-neutral text-neutral">4</p>
          <div ref={stepFourRef}>
            <h2 className="text-bg-grey">STEP FOUR</h2>
            <h1 className="text-neutral">SUMMARY</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;