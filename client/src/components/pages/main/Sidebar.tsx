import Nav from "./Nav";
import { FaDiscord } from "react-icons/fa";

const Sidebar = () => {
  const groupChatData = [
    {
      id: 1,
      imageUrl:
        "https://pbs.twimg.com/profile_images/851446117216727040/CkSeULeI_400x400.jpg",
    },
    { id: 2, imageUrl: "https://picsum.photos/seed/picsum/200/300" },
    { id: 4, imageUrl: "https://picsum.photos/200/300?grayscale" },
    { id: 5, imageUrl: "https://picsum.photos/200/300/?blur" },
  ];

  return (
    <div>
      <div className="flex flex-row h-screen">
        <div className="w-full bg-dc4 text-white p-2 ">
          <div className="flex justify-center items-center h-11 w-11 rounded-2xl bg-dc1 mb-5">
            {/* <FaDiscord className="h-7 w-7 text-neutral-200" /> */}
            <img
              className="h-7 w-7 text-neutral-200"
              src="chatHub_logo.png"
              alt="hero"
            />
          </div>

          {groupChatData.map((data) => (
            <div className=" mb-4">
              <div className="h-11 w-11 rounded-3xl overflow-hidden transition-all duration-300 hover:rounded-2xl">
                <img
                  src={data.imageUrl}
                  alt="Profile"
                  key={data.id}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
