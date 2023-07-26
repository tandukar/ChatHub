import { BsFillPersonFill } from "react-icons/bs";
const Nav = () => {
  return (
    <div>
      <div className="flex flex-row w-full h-12 gap-10 bg-dc5 p-2 font-semibold items-center text-neutral-200 text-sm shadow-lg  relative z-10">
        <div className=" flex font-bold ">
          <BsFillPersonFill className="w-5 h-5 mr-1"/>
          Friends
        </div>
        <div className=" flex ">Online</div>
        <div className=" flex ">All</div>
        <div className=" flex ">Pending</div>
        <div className=" flex ">Blocked</div>
        <div className=" flex">
          <button className="bg-green-700 px-2 py-1 rounded-md">
            Add Friend
          </button>
        </div>
      </div>
    </div>
  );
};
export default Nav;
