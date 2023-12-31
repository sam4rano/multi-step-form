import Login from "./Login";
import Sidebar from "./Sidebar";
import Mobilebar from "./MobileBar";

const Container = () => {
  return (
    <div className="flex flex-row justify-evenly md:flex-col">
      <div className="md:hidden">
        <Sidebar />
      </div>
      <div className="lg:hidden h-[100px] md:overflow-hidden">
        <Mobilebar />
      </div>

      <Login />
    </div>
  );
};

export default Container;
