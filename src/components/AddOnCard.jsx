import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const AddOnCard = ({ title, description, amount, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  const cardStyle = {
    backgroundColor: checked ? "#E6E6FA" : "white",
    border: `2px solid ${checked ? "black" : "gray"}`,
  };

  return (
    <div
      className="flex flex-row justify-between lg:px-[40px] md:flex-row md:items-center md:justify-around rounded-[10px] border-2 border-primary lg:py-[10px] md:py-[5px] lg:m-[10px] md:my-[10px] cursor-pointer w-[500px] md:w-[320px] md:mx-auto"
      style={cardStyle}
    >
      <div className="flex flex-row justify-around">
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />

        <div className="flex flex-col justify-between">
          <h2 className="font-bold">{title}</h2>
          <h4>{description}</h4>
        </div>
      </div>
      <p className="pt-[15px]">${amount}/mo</p>
    </div>
  );
};

export default AddOnCard;
