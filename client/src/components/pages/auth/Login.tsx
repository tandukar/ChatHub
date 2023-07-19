import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <img
        className="w-full object-cover h-screen "
        src="authBackground.png"
        alt="hero"
      />

      <div className="absolute inset-0 flex  flex-col justify-center items-center ">
        <div className="bg-dc3 w-100  h-auto rounded-md shadow-lg p-5 md:p-8 ">
          <div className="text-left flex flex-col items-center">
            <h1 className="text-xl font-bold text-white mb-2 ">
              Welcome Back!
            </h1>
            <p className="  text-gray-400 text-sm  mb-6">
              {" "}
              We're so excited to see you again!
            </p>
          </div>
          <div className="w-full text-left ">
            <div className="flex flex-col">
              <label className="text-gray-400 font-bold text-xs  text-left">
                EMAIL OR PHONE NUMBER
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="EMAIL"
                  id="email"
                  className="w-full  bg-dc2 rounded-sm px-4 py-2 mb-5 mt-2 text-white"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-400 font-bold text-xs  text-left">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="PASSWORD"
                  id="password"
                  className="w-full  bg-dc2 rounded-sm px-4 py-2 mb-1 mt-2 text-white"
                />
              </div>
            </div>

            <label className="text-left flex items-center    cursor-pointer">
              <span className="text-blue-500 text-sm font-semibold">
                Forgot your password?
              </span>
            </label>
          </div>

          <button className="bg-dc1 w-full mt-5 mb-3 p-2 rounded-sm font-semibold text-white ">
            Continue
          </button>
          <p className="text-slate-400 text-sm">
            Need an account{" "}
            <span className="text-blue-500 text-sm font-semibold mt-3 cursor-pointer"  onClick={()=>{ navigate("/register")}}>
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
