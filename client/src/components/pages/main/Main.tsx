import Nav from "./Nav";
import { FaDiscord } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Friends from "./Friends";

const Main = () => {
  const activeFriends: any[] = [
    {
      id: 1,
      username: "John Doe",
      imageUrl:
        "https://pbs.twimg.com/profile_images/851446117216727040/CkSeULeI_400x400.jpg",
    },
  ];

  return (
    <div>
      <div className="flex flex-row h-screen">
        <Sidebar />
        <div className="w-full flex flex-col">
          <Nav />
          <div className="bg-dc5 flex-grow  overflow-y-hidden ">
            <div className="flex flex-row gap-4 px-5   ">
              <div className="flex flex-col w-3/4  py-3">
                <Friends />
              </div>
              <div className="flex flex-col w-1/5 ml-2 border-l h-screen border-neutral-600">
                <div className="ml-3 mt-3 py-3 ">
                  <h1 className=" text-white font-bold text-xl  ">
                    Active Now
                  </h1>

                  {activeFriends.length > 0 ? (
                    activeFriends.map((data) => (
                      <div className="flex flex-row items-center gap-2 mt-3">
                        <div className="h-11 w-11 rounded-3xl overflow-hidden ">
                          <img
                            src={data.imageUrl}
                            alt="Profile"
                            key={data.id}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="text-white font-bold text-md">
                            {data.username}
                          </h1>
                          <h1 className="text-neutral-300 text-sm">Online</h1>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className=" text-center  mt-6">
                      <h1 className="text-white font-bold">
                        It's quiet for now...
                      </h1>
                      <p className="text-gray-400">
                        When a friend is active, you'll see them here.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
