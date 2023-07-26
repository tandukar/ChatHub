import Nav from "./Nav";
import { FaDiscord } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div>
      <div className="flex flex-row h-screen">
          {/* {/* <div className="flex justify-center items-center h-11 w-11 rounded-2xl bg-dc1"> 
            <FaDiscord className="h-7 w-7 text-neutral-200" />
          </div> */}
          <Sidebar />
        <div className="w-full flex flex-col">
          <Nav />
          <div className="bg-dc5 h-screen"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
