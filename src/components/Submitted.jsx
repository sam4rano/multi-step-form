import React from "react";
import SubImage from "../assets/images/thank-you.svg";
import Sidebar from "./Sidebar";

const Submitted = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />

      <div className="w-[500px] pl-[100px]">
        <div className="pt-[150px] flex flex-col justify-between mx-auto">
          <img src={SubImage} alt="submitted" className="w-[50px] h-[50px] mx-auto"/> 
          <h1 className="font-bold text-[30px] text-center">Thank You</h1>
        </div>
        <h2 className="text-[14px] text-center">
          Thanks for confirming your subscription we hove you have fun using our
          platform. if you ever need support please feel free to email us at
          support@loremgaming.com
        </h2>
      </div>
    </div>
  );
};

export default Submitted;
