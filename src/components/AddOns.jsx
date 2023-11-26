import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AddOnCard from "./AddOnCard";
import Sidebar from "./Sidebar";

const AddOns = () => {
  const navigate = useNavigate();
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleAddOnChange = (title, amount, isChecked, e) => {
    const addonExists = selectedAddons.some((addon) => addon.title === title);

    if (isChecked && !addonExists) {
      setSelectedAddons((prevAddons) => [...prevAddons, { title, amount }]);
    } else if (!isChecked && addonExists) {
      setSelectedAddons((prevAddons) =>
        prevAddons.filter((addon) => addon.title !== title)
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("addons", JSON.stringify(selectedAddons));

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
    <div className="flex flex-row">
      <Sidebar />

      <form onSubmit={handleSubmit} className="mx-auto">
        <div className="w-[490px] mx-auto pt-[40px]">
          <h1 className="font-bold text-[20px]">Pick Add-Ons</h1>
          <h3>Add-on helps enhance your gaming experience</h3>
        </div>
        <div className="flex flex-col justify-between py-[20px] w-[500px] mx-auto">
          {addon.map((items) => (
            <AddOnCard
              key={items.id}
              title={items.title}
              description={items.description}
              amount={items.amount}
              onChange={(isChecked, e) =>
                handleAddOnChange(items.title, items.amount, isChecked, e)
              }
            />
          ))}
        </div>
        <div className="flex flex-row justify-between mx-auto w-[500px] pt-[40px]">
          <Link to="/plans">Go Back</Link>
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

export default AddOns;
