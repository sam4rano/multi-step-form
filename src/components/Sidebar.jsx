import { useState, useRef } from "react";
import BgImage from "../assets/images/bg-sidebar-desktop.svg";
import { useLocation, NavLink } from "react-router-dom";

const Sidebar = ({ setActiveStep }) => {


  const sidebarStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "20px",
    height: "100vh",
    width: "18vw",
  };


  const sideBarItems = [
    { id: 1, title: "STEP ONE", subtitle: "YOUR INFO", link: "/" },
    { id: 2, title: "STEP TWO", subtitle: "SELECT PLAN", link: "/plans" },
    { id: 3, title: "STEP THREE", subtitle: "ADD ON", link: "/addons" },
    { id: 4, title: "STEP FOUR", subtitle: "SUMMARY", link: "/summary" },
  ];

  return (
    <div style={sidebarStyle}>
      <div className="flex flex-col gap-[20px] pt-[40px]">
        {sideBarItems.map((item, index) => (
          <NavLink key={index} to={item.link} className="flex gap-4 pointer-events-none">
            {({ isActive }) => (
              <>
                <div className={`rounded-full flex items-center justify-center h-8 w-8  shrink-0 ${isActive? "bg-blue-50 text-black": "bg-blue-500 "} border border-neutral text-neutral`}>
                  <span className={isActive ? "active" : ""}>{item.id}</span>
                </div>
                <div>
                  <h2 className="text-bg-grey">{item.title}</h2>
                  <h1 className="text-neutral">{item.subtitle}</h1>
                </div>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
