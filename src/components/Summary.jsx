import {useEffect, useState} from 'react'

const Summary = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Retrieve the selected items from local storage
    const arcade = localStorage.getItem('Arcade_amount');
    const arcadeMonthly = localStorage.getItem('Arcade(monthly)');
    
    // Update the state with the retrieved items
    if (arcade) {
      setSelectedItems(JSON.parse(arcade));
    }
    if (arcadeMonthly === true) {
      setData(JSON.parse(arcadeMonthly));
    }
  }, []);
  return (
	<div className="pt-[40px]">
    <div>
      <h1>Finishing Up</h1>
      <h4>Double check everything looks ok before confirming</h4>
    </div>
    <div>
      <div className="flex flex-row justify-around">
        <h2>{data}Arcade(monthly)</h2>
        <h2>${selectedItems}/mo</h2>
      </div>

    </div>

  </div>
  )
}

export default Summary