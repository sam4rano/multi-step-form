

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AddOnCard from "./AddOnCard";
import Sidebar from "./Sidebar";
import imgMobile from "../assets/images/mobile.svg";
import Mobilebar from "./MobileBar";

const AddOns = () => {
  const navigate = useNavigate();
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleAddOnChange = (title, amount, isChecked) => {
    // Update the selected addons array based on the checkbox change
    if (isChecked) {
      setSelectedAddons((prevAddons) => [...prevAddons, { title, amount }]);
    } else {
      setSelectedAddons((prevAddons) =>
        prevAddons.filter((addon) => addon.title !== title)
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the selected addons to local storage
    localStorage.setItem("addons", JSON.stringify(selectedAddons));

    // Navigate to the next step
    navigate("/summary");
  };

  const addon = [
    {
      id: 1,
      title: "Online Service",
      description: "Access to multiplayer games",
      amount: 1,
    },
    {
      id: 2,
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      amount: 2,
    },
    {
      id: 3,
      title: "Customizable Profile",
      description: "Custom theme on your profile",
      amount: 2,
    },
  ];

  return (
    <div className="flex flex-row md:flex-col">
      <div className="md:hidden">
        <Sidebar />
      </div>
      <div className="lg:hidden h-[100px]">
        <Mobilebar />
      </div>

      <form onSubmit={handleSubmit} className=" mx-auto md:z-30 md:bg-neutral rounded-[10px] md:overflow-hidden">
        <div className="w-[490px] lg:mx-auto pt-[40px] md:w-[400px] md:mx-auto md:pt-[-10px] md:flex md:justify-center md:flex-col md:pl-[10px]">
          <h1 className="font-bold text-[20px]">Pick Add-Ons</h1>
          <h3>Add-on helps enhance your gaming experience</h3>
        </div>
        <div className="flex flex-col justify-between py-[20px] w-[500px] md:w-[360px] mx-auto">
          {addon.map((items) => (
            <AddOnCard
              key={items.id}
              title={items.title}
              description={items.description}
              amount={items.amount}
              onChange={(isChecked) =>
                handleAddOnChange(items.title, items.amount, isChecked)
              }
            />
          ))}
        </div>
        <div className="flex flex-row justify-between mx-auto w-[500px] pt-[40px] md:w-[360px]">
          <Link to="/plans">Go Back</Link>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-300 px-[15px] py-[5px] text-neutral rounded-[5px]"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOns;
