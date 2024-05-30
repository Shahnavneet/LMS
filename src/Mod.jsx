import logo from "./assets/logo.jpg";
import Sidebar from "./Sidebar";
import Batch from "./Batch";
import Module from "./Module";
import Test from "./Test";
import Resource from "./Resource";
import Upcoming from "./Upcoming";
import Completed from "./Completed";
import Course from "./Course";
import Userbox from "./Userbox";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

const Mod = () => {
  const [open, setOpen] = useState(false);
  const show = () => {
    setOpen((open) => !open);
  };
  return (
    <>
      <BrowserRouter>
        <div>
          <header className="h-16 w-full flex justify-around  shadow-md mt-2">
            <div className="h-16 w-30 ">
              <img src={logo} className="h-16" />
            </div>
            <div className="flex gap-8 justify-center items-center">
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                </svg>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <div className="w-12 h-12 bg-blue-950 rounded-full flex justify-center items-center">
                  <h2>N</h2>
                </div>
                <h3>Hi,</h3>
              </div>
              <div onClick={show}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </div>
            {open && <Userbox />}
          </header>
          <div className=" flex mt-6 shadow-md w-full h-screen">
            <div className=" w-1/5 h-full shadow-md">
              <Sidebar />
            </div>
            <div className="shadow-md w-3/4">
              <Routes>
                <Route path="/Module" element={<Module />}></Route>
                <Route path="/Batch" element={<Batch />}>
                  <Route path="Course" element={<Course />}></Route>
                  <Route path="Upcoming" element={<Upcoming />}></Route>
                  <Route path="Completed" element={<Completed />}></Route>
                </Route>
                <Route path="/Test" element={<Test />}></Route>
                <Route path="/Resource" element={<Resource />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};
export default Mod;
