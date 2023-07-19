import { useState } from "react";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [year, setYear] = useState<number | undefined>(undefined);
  const [month, setMonth] = useState<number | undefined>(undefined);
  const [day, setDay] = useState<number | undefined>(undefined);

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
            <h1 className="text-xl font-bold text-white mb-7 ">
              Create an account
            </h1>
          </div>
          <div className="w-full text-left ">
            <div className="flex flex-col">
              <label className="text-gray-400 font-bold text-xs  text-left">
                EMAIL
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
                USERNAME
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="USERNAME"
                  id="username"
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
                  className="w-full  bg-dc2 rounded-sm px-4 py-2 mb-5 mt-2 text-white"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400 font-bold text-xs  text-left">
                DATE OF BIRTH
              </label>
              <div className="relative flex flex-row gap-5 ">
                <MonthPicker
                  defaultValue={"Month"}
                  endYearGiven // mandatory if end={} is given in YearPicker
                  year={year as number} // mandatory
                  required={true} // default is false
                  value={month as number} // mandatory
                  // onChange={(month) => setMonth(month)}
                  onChange={(selectedMonth: number | undefined) =>
                    setMonth(selectedMonth)
                  }
                  id={"month"}
                  name={"month"}
                  classes={
                    "dropdown-year bg-dc2  w-full   rounded-sm px-4 py-2 mb-2 mt-2 text-white"
                  }
                  optionClasses={"option classes"}
                />
                <DayPicker
                  defaultValue={"Day"}
                  year={year as number} // mandatory
                  month={month as number} // mandatory
                  endYearGiven // mandatory if end={} is given in YearPicker
                  required={true} // default is false
                  value={day as number} // mandatory
                  onChange={(selectedDay: number | undefined) =>
                    setDay(selectedDay)
                  }
                  id={"day"}
                  name={"day"}
                  classes={
                    "dropdown-year bg-dc2  w-full   rounded-sm px-4 py-2 mb-2 mt-2 text-white"
                  }
                  optionClasses={"option classes"}
                />
                <YearPicker
                  defaultValue={"Year"}
                  start={1925}
                  end={2020}
                  reverse
                  required={true}
                  disabled={false}
                  value={year as number} // Cast year as number
                  onChange={(selectedYear: number | undefined) =>
                    setYear(selectedYear)
                  }
                  id={"year"}
                  name={"year"}
                  classes={
                    "dropdown-year bg-dc2  w-full   rounded-sm px-4 py-2 mb-2 mt-2 text-white"
                  }
                  optionClasses={"option classes"}
                />
              </div>
            </div>

            <label className="text-left flex items-center    cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-14 w-10 mr-2  "
                style={{ backgroundColor: "transparent" }}
              />
              <span className="text-slate-400 text-xs">
                (Optional) It's okay to send me emails and Discord updates,
                tips, and special offers. You can opt out at nay time
              </span>
            </label>
          </div>
          
          <button className="bg-dc1 w-full mt-3 mb-3 p-2 rounded-sm font-semibold text-white ">
            Continue
          </button>
          <p className="text-slate-400 text-xs">
            By registering, you agree to Discord's Terms of Service and Privacy
            Policy.
          </p>
          <p className="text-blue-500 text-sm font-semibold mt-3 cursor-pointer" onClick={()=>{navigate('/login')}}>
            Already have an account?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
