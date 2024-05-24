import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";
import { logout } from "../../services/operations/authAPI";

const home = "/";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  const dispatch = useDispatch();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className=" flex h-14 items-center justify-center border-b-[1px] border-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            <Link to={home}>
              <p
                className={`${
                  matchRoute(home)
                    ? "text-yellow-25 hover:text-yellow-100"
                    : "text-richblack-25 hover:text-richblack-100"
                } relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[100%] before:bottom-0  after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] `}
              >
                Home
              </p>
            </Link>
          </ul>
        </nav>

        {/* login /signup / dashboard */}
        <div className="flex gap-x-4 items-center font-bold text-white">
          {token === null && (
            <Link to={"/login"}>
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblue-100 rounded-md">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to={"/signup"}>
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblue-100 rounded-md">
                Sign in
              </button>
            </Link>
          )}

          {token && (
            <p
              onClick={() => {
                dispatch(logout("/"));
                // setOpen(false);
              }}
              className="text-white cursor-pointer"
            >
              Log Out
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
