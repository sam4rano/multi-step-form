import Login from "./Login";
import Sidebar from "./Sidebar";
import imgMobile from "../assets/images/mobile.svg";

const Container = () => {
  return (
    <div className="flex flex-row justify-around md:flex-col">
      <div className="md:hidden">
        <Sidebar />
      </div>
      <div className="lg:hidden h-[200px] z-10">
        <img src={imgMobile} alt="img" className="w-full" />
      </div>

      <Login />
    </div>
  );
};

export default Container;
