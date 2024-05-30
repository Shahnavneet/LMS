import React from "react";
const newObj = [
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
];
const Course = () => {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {newObj.map((val) => {
        {
          return (
            <div className="w-54 border-solid border-2 border-b-4 border-indigo-500 shadow-md shadow-indigo-600 rounded-lg p-2">
              <div className="flex justify-between">
                <div>{val.coursedets}</div>
                <div>
                  <button>View Details</button>
                </div>
              </div>
              <span>course:{val.course}</span>
              <br />
              <span>trainer :{val.trainer}</span>
              <br />
              <span>Start Date :{val.date}</span>
              <br />
              <span>Timming :{val.time}</span>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Course;
