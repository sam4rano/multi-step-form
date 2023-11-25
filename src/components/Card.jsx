import { useState } from "react";

const Card = ({ image, title, amount, months, isClicked, onClick}) => {
  const handleClick = () => {

    Object.keys(localStorage).forEach((key) => {
      if (key.includes("Arcade") || key.includes("Advance") || key.includes("Pro")) {
        localStorage.removeItem(key);
      }
    });
  
    // Set the selected plan and its amount
    localStorage.setItem("selectedPlan", title);
    localStorage.setItem(`${title}_amount`, amount);
  
    // Set the billing type (monthly or yearly)
    localStorage.setItem("billingType", isClicked ? "monthly" : "yearly");
  
    onClick()
  };
  const cardStyle = {
    backgroundColor: isClicked ? "#E6E6FA" : "white",
    border: `2px solid ${isClicked ? "black" : "gray"}`,
  };
  return (
    <div
      className="flex flex-col px-[40px] rounded-[10px] border-2 border-primary py-[10px] m-[10px] cursor-pointer  "
      style={cardStyle}
      onClick={handleClick}
    >
      <img src={image} alt={title} className="w-[50px] h-[50px] mb-[30px]" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>${amount}/mo</p>
        <p className="w-[100px]">{months}</p>
      </div>
    </div>
  );
};

export default Card;
