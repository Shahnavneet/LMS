import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className=" flex flex-col gap-2 ml-1">
        <Link to="/Module">
          <div className="hover:bg-blue-700 p-5 rounded-2xl ">Module</div>
        </Link>
        <Link to="/Batch">
          <div className="hover:bg-blue-700 p-5 rounded-2xl ">Batch</div>
        </Link>
        <Link to="/Test">
          <div className="hover:bg-blue-700 p-5 rounded-2xl ">Test Module</div>
        </Link>
        <Link to="/Payment">
          <div className="hover:bg-blue-700 p-5 rounded-2xl ">Payments</div>
        </Link>
      </div>
    </>
  );
};
export default Sidebar;
