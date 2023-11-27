import React from "react";
import SubImage from "../assets/images/thank-you.svg";
import Sidebar from "./Sidebar";
import imgMobile from "../assets/images/mobile.svg"
import Mobilebar from "./MobileBar";

const Submitted = () => {
  return (
    <div className="flex flex-row md:flex-col  overflow-hidden">
      <div className="md:hidden">
        <Sidebar />
      </div>
      <div className="lg:hidden h-[200px]">
        <Mobilebar />
      </div>

      <div className="w-[500px]  mx-auto md:rounded-[10px] md:w-[340px]  overflow-hidden md:bg-neutral md:absolute md:top-[90px] md:right-0 md:left-0">
        <div className="pt-[150px] md:pt-[50px] flex flex-col justify-between mx-auto">
          <img src={SubImage} alt="submitted" className="w-[50px] h-[50px] mx-auto"/> 
          <h1 className="font-bold text-[30px] text-center">Thank You</h1>
        </div>
        <h2 className="text-[14px] lg:text-center md:w-[300px] md:text-center md:mx-auto  overflow-hidden">
          Thanks for confirming your subscription we hove you have fun using our
          platform. if you ever need support please feel free to email us at
          support@loremgaming.com
        </h2>
      </div>
    </div>
  );
};

export default Submitted;
