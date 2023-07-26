import Nav from "./Nav";
import { FaDiscord } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-row h-screen">
        <div className="w-full bg-dc4 text-white p-2 ">
          <div className="flex justify-center items-center h-11 w-11 rounded-2xl bg-dc1 mb-5">
            <FaDiscord className="h-7 w-7 text-neutral-200" />
          </div>
          <div className=" mb-4">
            <div className="h-11 w-11 rounded-3xl overflow-hidden transition-all duration-300 hover:rounded-2xl">
              <img
                src="https://pbs.twimg.com/profile_images/851446117216727040/CkSeULeI_400x400.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
