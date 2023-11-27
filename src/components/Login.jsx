import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/plans");
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <form className=" mx-auto md:rounded-[20px] md:p-[30px] md:bg-neutral md:w-[360px]" onSubmit={handleSubmit}>
      <div className="pt-[50px] md:pt-[10px] md:pb-[5px]">
        <p className="text-[30px] font-bold ">Personal Info</p>
        <h5>Please provide your name, email address, and phone number</h5>
      </div>
      <div className="pb-[20px]">
        <label className="block text-[20px] font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={handleName}
          className="bg-gray-50 border border-gray-300 placeholder:p-[10px] text-gray-900 text-[20px] rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Vanessa Mint"
          required
        />
      </div>
      <div className="pb-[20px]">
        <label className="block text-[20px] font-medium">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder="vanessamint@gmail.com"
          className="bg-gray-50 border border-gray-300 placeholder:p-[10px] text-gray-900 text-[20px] rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="pb-[20px]">
        <label className="block text-[20px] font-medium">
          Phone Number
        </label>
        <input
          type="text"
          value={number}
          onChange={handleNumber}
          placeholder="e.g +123456789"
          pattern="^[+0-9]+$"
          title="Please enter a valid phone number"
          className="bg-gray-50 border placeholder:p-[10px] border-gray-300 text-gray-900 text-[20px] rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-primary flex text-right mt-[50px] px-[15px] py-[10px] rounded-[5px] text-neutral"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default Login;
