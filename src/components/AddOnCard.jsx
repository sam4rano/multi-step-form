import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const AddOnCard = ({ title, description, amount }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    // Save the checked state, amount, and title to local storage
    localStorage.setItem(title, JSON.stringify(!checked));
    localStorage.setItem(`${title}`, amount);
  };
  const cardStyle = {
    backgroundColor: checked ? "gray" : "white",
    border: `2px solid ${checked ? "black" : "gray"}`,
  };
  return (
    <div
      className="flex flex-row justify-between px-[40px] rounded-[10px] border-2 border-primary py-[10px] m-[10px] cursor-pointer w-[500px] "
      style={cardStyle}
      onClick={handleChange}
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
      <p>${amount}/mo</p>
    </div>
  );
};

export default AddOnCard;
