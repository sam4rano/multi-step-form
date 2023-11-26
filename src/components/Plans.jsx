import { useState } from "react";
import Switch from "@mui/material/Switch";
import Card from "./Card";
import Arcade from "../assets/images/arcade.svg";
import Advance from "../assets/images/advanced.svg";
import Pro from "../assets/images/pro.svg";
import Sidebar from "./Sidebar";
import { useNavigate, Link } from "react-router-dom";
import imgMobile from "../assets/images/mobile.svg"

const Plans = () => {
  const [checked, setChecked] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  
 
  const navigate = useNavigate();

  const handleChange = () => {
    setChecked(!checked);
    setSelectedPlan(null);
   
  };
  const dataPlans = [
    {
      id: 1,
      image: Arcade,
      title: "Arcade",
      monthlyCost: 9,
      yearlyCost: 90,
    },
    {
      id: 2,
      image: Advance,
      title: "Advance",
      monthlyCost: 12,
      yearlyCost: 120,
    },
    {
      id: 3,
      image: Pro,
      title: "Pro",
      monthlyCost: 15,
      yearlyCost: 150,
    },
  ];

  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/addons");
  };

  const handleCardClick = (planId) => {
    setSelectedPlan((prevSelectedPlan) => (prevSelectedPlan === planId ? null : planId));
  };
  
  
  return (
    <div className="flex flex-row md:flex-col">
      <div className="">

      </div>
        <Sidebar />
      <div className="lg:hidden">
        <img src={imgMobile} alt="img" />
      </div>

    <form className="mx-auto pt-[50px]" onSubmit={handleSubmit}>
      <div className="w-[580px] mx-auto">
        <h1 className="font-bold text-[20px]">SELECT YOUR PLANS</h1>
        <h3>You have the option of monthly or yearly billings</h3>
      </div>
      <div className="flex flex-row justify-center py-[20px] w-[500px] mx-auto">
        {dataPlans.map((plan) => (
          <Card
            key={plan.id}
            title={plan.title}
            image={plan.image}
            amount={checked ? plan.yearlyCost : plan.monthlyCost}
            months={checked ? "2 months free" : null}
            isClicked={selectedPlan === plan.id}
            onClick={() => handleCardClick(plan.id)}
            
          />
        ))}
      </div>
      <div className="max-w-[590px] mx-auto bg-bg-grey rounded-[10px]">
        <div className="flex justify-center mx-auto ">
          <label className="pt-[10px]">Monthly</label>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <label className="pt-[10px]">Yearly</label>
        </div>
      </div>
      <div className="flex flex-row justify-between mx-auto pt-[40px] max-w-[580px]">
        <Link to="/" className="">Go Back</Link>
        <button
          type="submit"
          className="bg-primary px-[15px] py-[5px] text-neutral rounded-[5px]"
        >
          Next Step
        </button>
      </div>
    </form>
    </div>
  );
};

export default Plans;
