import { useState, useRef } from "react";
import BgImage from "../assets/images/bg-sidebar-desktop.svg";
import { useLocation, NavLink } from "react-router-dom";
import imgMobile from "../assets/images/mobile.svg"

const Mobilebar = () => {


  const sidebarStyle = {
    backgroundImage: `url(${imgMobile})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
	height:"200px",
    width: "100%",
  };


  const sideBarItems = [
    { id: 1, title: "STEP ONE", subtitle: "YOUR INFO", link: "/" },
    { id: 2, title: "STEP TWO", subtitle: "SELECT PLAN", link: "/plans" },
    { id: 3, title: "STEP THREE", subtitle: "ADD ON", link: "/addons" },
    { id: 4, title: "STEP FOUR", subtitle: "SUMMARY", link: "/summary" },
  ];

  return (
    <div style={sidebarStyle} className="flex flex-row justify-center align-middle">
        {sideBarItems.map((item, index) => (
          <NavLink key={index} to={item.link} className="flex pt-[40px] pointer-events-none justify-around flex-row pl-[20px]">
            {({ isActive }) => (
              <>
                <div className={`rounded-full flex items-center justify-center h-8 w-8  shrink-0 ${isActive? "bg-blue-50 text-black": "bg-blue-500 "} border border-neutral text-neutral`}>
                  <span className={isActive ? "active" : ""}>{item.id}</span>
                </div>
                
              </>
            )}
          </NavLink>
        ))}
      
    </div>
  );
};

export default Mobilebar;
