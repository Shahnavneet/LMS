import { Link, Outlet } from "react-router-dom";

const Test = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full flex gap-12 p-8">
          <Link to="Allassigment">
            <div className="flex justify-center items-center border border-black rounded-full p-1 hover:bg-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M208,136H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm0,56H48V152H208v40Zm0-144H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Zm0,56H48V64H208v40Z"></path>
              </svg>
              <span>All Assigments</span>
            </div>
          </Link>
          <Link to="NewAssigment">
            <div className="flex justify-center items-center border border-black rounded-full p-1 hover:bg-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
              </svg>
              <span>New Assigments</span>
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
export default Test;
