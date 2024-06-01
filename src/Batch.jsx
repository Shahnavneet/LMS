import { useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";

const Cardd = () => {
  let [value, setValue] = useState([
    {
      id: "1",
      coursedets: "Front-End/Nitin..",
      course: "Mern Stack",
      trainer: "Nitin bella",
      date: "1/may/2024 to 1/july/2024",
      time: "10 am",
    },
    {
      id: "2",
      coursedets: "Back-End/Raghav..",
      course: "Phyton",
      trainer: "Raghav",
      date: "1/may/2024 to 1/july/2024",
      time: "12 pm",
    },
    {
      id: "3",
      coursedets: "Hacking/Navneet..",
      course: "Hacking",
      trainer: "Navneet shah",
      date: "1/jan/2024 to 1/june/2024",
      time: "8 am",
    },
    {
      id: "4",
      coursedets: "Data Analytics/Kush..",
      course: "Data Analytics",
      trainer: "Kush Painuly",
      date: "1/April/2024 to 15/August/2024",
      time: "3 pm",
    },
    {
      id: "5",
      coursedets: "Data Science/Gautam..",
      course: "Data Science",
      trainer: "Gautam",
      date: "20/Feb/2024 to 1/July/2024",
      time: "5 pm ",
    },
  ]);

  const inputValue = useRef();
  const getVal = () => {
    // value = inputValue.current.value;
    // let item = OBJ.filter((item) => {
    //   return item.id == value;
    value = inputValue.current.value.toLowerCase();
    let item = OBJ.filter((elem) => {
      let keys = Object.keys(elem);
      for (let i = 0; i < keys.length; i++) {
        let v = keys[i];
        if (String(elem[v]).toLocaleLowerCase().includes(value)) {
          return elem;
        }
      }
    });
    setValue(item);
  };

  return (
    <>
      <div className="w-full">
        <div className="mt-4">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-1/4 ml-4 rounded-2xl border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ref={inputValue}
            placeholder="Search Batch here"
            onChange={getVal}
          ></input>
        </div>
        <div className="flex justify-evenly p-2 w-1/2 mt-4">
          <Link to="Course">
            <div className="rounded-2xl border border-solid border-slate-400 p-1 w-20 hover:bg-blue-700 flex justify-center">
              Current
            </div>
          </Link>

          <Link to="Upcoming">
            <div className="rounded-2xl border border-solid border-slate-400 p-1 w-24 hover:bg-blue-700 flex justify-center">
              Upcoming
            </div>
          </Link>

          <Link to="Completed">
            <div className="rounded-2xl border border-solid border-slate-400 p-1 w-24 hover:bg-blue-700 flex justify-center">
              Completed
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap mt-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Cardd;
