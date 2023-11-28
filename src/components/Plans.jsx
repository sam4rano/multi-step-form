import { useState } from "react";
import Switch from "@mui/material/Switch";
import Card from "./Card";
import Arcade from "../assets/images/arcade.svg";
import Advance from "../assets/images/advanced.svg";
import Pro from "../assets/images/pro.svg";
import Sidebar from "./Sidebar";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import Mobilebar from "./MobileBar";

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

    if (selectedPlan !== null) {
      navigate("/addons");
    } else {
      toast.error(`Please select a plan before proceeding.`, {
        position: "top-right",
        autoClose: 1000,
      });
    }
  };

  const handleCardClick = (planId) => {
    setSelectedPlan((prevSelectedPlan) =>
      prevSelectedPlan === planId ? null : planId
    );
  };

  return (
    <div className="flex flex-row md:flex-col md:overflow-hidden md:bg-red-300">
      <div className="md:hidden">
        <Sidebar />
      </div>
      <div className="lg:hidden h-[200px] md:overflow-hidden">
        <Mobilebar />
      </div>

      <form
        className="mx-auto pt-[50px] md:rounded-[20px] md:w-[360px] md:bg-neutral md:absolute md:top-[90px] md:right-0 md:left-0 "
        onSubmit={handleSubmit}
      >
        <div className="">
          <div className="w-[580px] lg:mx-auto md:w-[400px] md:mx-auto md:pt-[-10px] md:flex md:justify-center md:flex-col md:align-middle">
            <h1 className="font-bold text-[20px] md:pl-[50px]">
              SELECT YOUR PLANS
            </h1>
            <div className=" md:flex md:wrap md:mx-auto md:w-[300px]">
              <h3>You have the option of monthly or yearly billings</h3>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-center lg:py-[20px] md:w-[340px] lg:w-[500px] mx-auto">
            {dataPlans.map((plan) => (
              <Card
                key={plan.id}
                title={plan.title}
                image={plan.image}
                amount={checked ? plan.yearlyCost : plan.monthlyCost}
                checked={checked}
                months={checked ? "2 months free" : null}
                isClicked={selectedPlan === plan.id}
                onClick={() => handleCardClick(plan.id)}
              />
            ))}
          </div>
          <div className="max-w-[590px] mx-auto bg-bg-grey rounded-[10px] md:w-[320px]">
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
        </div>
        <div className="flex flex-row justify-between mx-auto pt-[40px] max-w-[580px] md:w-[320px]">
          <Link to="/" className="">
            Go Back
          </Link>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-300 px-[15px] py-[5px] text-neutral rounded-[5px]"
          >
            Next Step
          </button>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
};

export default Plans;
