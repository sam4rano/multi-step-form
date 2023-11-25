import {useState} from "react"

const Card = ({ image, title, amount, months, onClick }) => {
	const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    // Clear previous selection from local storage
    Object.keys(localStorage).forEach((key) => {
      if (key.includes("Arcade")) {
        localStorage.removeItem(key);
      }
    });

    // Save the amount and title to local storage
    const storageKey = `${title}(${isClicked ? "monthly" : "yearly"})`;
    localStorage.setItem(`${title}_amount`, amount);
    localStorage.setItem(storageKey, JSON.stringify(isClicked));

    // Call the onClick handler with the plan id
    onClick();
  };



  
  const cardStyle = {
    backgroundColor: isClicked ? 'gray' : 'white',
    border: `2px solid ${isClicked ? 'black' : 'gray'}`,
  };
  return (
    <div className="flex flex-col px-[40px] rounded-[10px] border-2 border-primary py-[10px] m-[10px] cursor-pointer  " style={cardStyle} onClick={handleClick}>
      <img src={image} alt={title} className="w-[50px] h-[50px] mb-[30px]" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>${amount}/mo</p>
        <p className="w-[100px]">{months}</p>
      </div>
    </div>
  );
};

export default Card;
