import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Summary = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [data, setData] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [billingType, setBillingType] = useState("");
  const [selectedAddon, setSelectedAddOn] = useState("");
  const [addonPrice, setAddOnPrice] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedPlan = localStorage.getItem("selectedPlan");
    const storedBillingType = localStorage.getItem("billingType");
    const storedAddOns = localStorage.getItem("addons");

    const priceAddOns = localStorage.getItem("addonplan");

    setSelectedPlan(storedPlan || "");
    setBillingType(storedBillingType || "");
    setSelectedAddOn(storedAddOns || "");
    setAddOnPrice(priceAddOns || "");

    const storedItems = localStorage.getItem(`${storedPlan}_amount`);

    const addonPricing = localStorage.getItem(`${priceAddOns}_price`);
    console.log(addonPricing);

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
    <form onSubmit={handleSubmit} className="pt-[40px] mx-auto">
      <div className="mx-auto">
        <h1 className="font-bold text-[30px]">Finishing Up</h1>
        <h4>Double check everything looks ok before confirming</h4>
      </div>
      <div className="flex flex-col gap-[20px] ">
        <div className="bg-bg-grey flex flex-col gap-[40px] py-[10px] rounded-[10px]">
          <div className="flex flex-row justify-around">
            <h2>
              {selectedPlan}({billingType})
            </h2>
            <h2>${selectedItems}/mo</h2>
          </div>
          <hr />
          <div className="flex flex-row justify-around">
            <h2>{selectedAddon}</h2>
            <h2>+${addonPrice}/mo</h2>
          </div>
          <div className="flex flex-row justify-around">
            <h2>Total(per month)</h2>
            <h2>+${Number(selectedItems) + Number(addonPrice)}</h2>
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
  );
};

export default Summary;
