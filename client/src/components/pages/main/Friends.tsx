import React from "react";
import { BiSearch } from "react-icons/bi";

const Friends = () => {
  return (
    <div className="flex flex-row items-center mt-2"> 
      <input
        type="text"
        placeholder="Search . . ."
        className="bg-dc2 rounded-l-md px-4 py-2  text-white w-full focus:outline-none h-9" 
      />
      <div className="bg-dc2 h-9 flex items-center px-2 rounded-r-md "> 
        <BiSearch className="text-white h-5 w-5" />
      </div>
    </div>
  );
};

export default Friends;
