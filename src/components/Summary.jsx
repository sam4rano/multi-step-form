import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Mobilebar from "./MobileBar";

const Summary = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [data, setData] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [billingType, setBillingType] = useState("");
  const [selectedAddon, setSelectedAddOn] = useState([]);

  const navigate = useNavigate();

  let storedAddOnsArray = [];

  useEffect(() => {
    const storedPlan = localStorage.getItem("selectedPlan");
    const storedBillingType = localStorage.getItem("billingType");
    const storedAddOns = localStorage.getItem("addons");

    storedAddOnsArray = JSON.parse(storedAddOns || "[]");

    setSelectedPlan(storedPlan || "");
    setBillingType(storedBillingType || "");
    setSelectedAddOn(storedAddOnsArray || "");

    const storedItems = localStorage.getItem(`${storedPlan}_amount`);

    const storedMonthly = localStorage.getItem(
      `${storedPlan}(${storedBillingType})`
    );

    if (storedItems) {
      setSelectedItems(JSON.parse(storedItems));
    }

    if (storedMonthly === "true") {
      setData(JSON.parse(storedMonthly));
    }
  }, []);

  // Calculate total amount including addon amounts
  const totalAmount = selectedItems + selectedAddon.reduce((acc, addon) => acc + addon.amount, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/submitted");
  };

  return (
    <div className="flex flex-row md:flex-col">
      <div className="md:hidden">
        <Sidebar />
      </div>
      <div className="lg:hidden h-[100px] w-full ">
       <Mobilebar />
      </div>

      <form onSubmit={handleSubmit} className="pt-[40px] md:pt-[20px] mx-auto md:rounded-[10px] md:z-30 md:bg-neutral md:w-[360px]">
        <div className="mx-auto pb-[20px] md:flex md:flex-col md:justify-center md:p-[10px]">
          <h1 className="font-bold text-[30px]">Finishing Up</h1>
          <h4 className="md:w-[320px]">Double check everything looks ok before confirming</h4>
        </div>
        <div className="flex flex-col gap-[20px] md:w-[340px] md:mx-auto">
          <div className="md:bg-bg-grey md:w-[330px] flex flex-col gap-[40px] py-[10px] px-[10px] rounded-[10px]">
            <div className="flex flex-row justify-around ">
              <h2>
                {selectedPlan}({billingType})
              </h2>
              <h2>${selectedItems}/mo</h2>
            </div>
            <hr className="w-full text-black"/>
            <div className="flex flex-col justify-around md:w-[280px]">
              {selectedAddon.map((addon, index) => (
                <div key={index} className="flex flex-row justify-center ">
                  <div className="flex flex-col pr-[150px] md:pr-[110px]">{addon.title}</div>
                  <p className="">${addon.amount}</p>
                </div>
              ))}
            </div>
          </div>
            <div className="flex flex-row justify-around">
              <h2>Total(per month)</h2>
              <h2 className="text-blue-500">+${totalAmount}</h2>
            </div>

          <div className="flex flex-row justify-between mx-auto w-[500px] pt-[40px] md:w-[340px]">
            <Link to="/addons">Go Back</Link>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-300 px-[15px] py-[5px] text-neutral rounded-[5px]"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Summary;
