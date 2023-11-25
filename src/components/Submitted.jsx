import React from 'react'
import SubImage from "../assets/images/thank-you.svg"

const Submitted = () => {
  return (
	<div>
    <div>
      <img src={SubImage} alt="submitted"  />
      <h1 className="font-bold text-[30px]">Thank You</h1>
    </div>
    <h2>Thanks for confirming your subscription we hove you have fun using our platform. if you ever need support please feel free to email us at support@loremgaming.com</h2>
  </div>
  )
}

export default Submitted