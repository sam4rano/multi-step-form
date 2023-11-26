import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import imgMobile from "../assets/images/mobile.svg"

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

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/submitted");
  };

  return (
    <div className="flex flex-row">
      
        <Sidebar />
      <div >
      </div>
        <img src={imgMobile} alt="img" className="lg:hidden" />
      
      <form onSubmit={handleSubmit} className="pt-[40px] mx-auto">
        <div className="mx-auto pb-[20px]">
          <h1 className="font-bold text-[30px]">Finishing Up</h1>
          <h4>Double check everything looks ok before confirming</h4>
        </div>
        <div className="flex flex-col gap-[20px] ">
          <div className="bg-bg-grey flex flex-col gap-[40px] py-[10px] px-[10px] rounded-[10px]">
            <div className="flex flex-row justify-around">
              <h2>
                {selectedPlan}({billingType})
              </h2>
              <h2>${selectedItems}/mo</h2>
            </div>
            <hr />
            <div className="flex flex-col justify-around">
              {selectedAddon.map((addon, index) => (
                <div key={index} className="flex flex-row ">
                  <div className="flex flex-row pr-[260px]">{addon.title}</div>
                  <p>${addon.amount}</p>
                </div>
              ))}
              {/* <h2>{selectedAddon}</h2> */}
              {/* <h2>+${addonPrice}/mo</h2> */}
            </div>
            <div className="flex flex-row justify-around">
              <h2>Total(per month)</h2>
              <h2>+${Number(selectedItems)}</h2>
            </div>
          </div>

          <div className="flex flex-row justify-between mx-auto w-[500px] pt-[40px]">
            <Link to="/addons">Go Back</Link>
            <button
              type="submit"
              className="bg-primary px-[15px] py-[5px] text-neutral rounded-[5px]"
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
