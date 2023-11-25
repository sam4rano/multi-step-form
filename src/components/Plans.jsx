import { useState } from "react";
import Switch from "@mui/material/Switch";
import Card from "./Card";
import Arcade from "../assets/images/arcade.svg";
import Advance from "../assets/images/advanced.svg";
import Pro from "../assets/images/pro.svg";
import { useNavigate, Link } from "react-router-dom";

const Plans = () => {
  const [checked, setChecked] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null); 
 
  const navigate = useNavigate();

  const handleChange = () => {
    setChecked(!checked);
    setSelectedPlan(null);

    dataPlans.forEach((plan) => {
      const monthlyKey = `${plan.title}(monthly)`;
      const yearlyKey = `${plan.title}(yearly)`;
      localStorage.removeItem(monthlyKey);
      localStorage.removeItem(yearlyKey);
    });
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
  return (
    <form className="py-[50px]" onSubmit={handleSubmit}>
      <div className="w-[500px] mx-auto">
        <h1 className="font-bold">SELECT YOUR PLANS</h1>
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
          />
        ))}
      </div>
      <div className="w-[500px] mx-auto">
        <div className="flex justify-around mx-auto bg-grey">
          <label>Monthly</label>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <label>Yearly</label>
        </div>
      </div>
      <div className="flex flex-row justify-between mx-auto w-[500px] pt-[40px]">
        <Link to="/">Go Back</Link>
        <button
          type="submit"
          className="bg-primary px-[15px] py-[5px] text-neutral rounded-[5px]"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default Plans;
