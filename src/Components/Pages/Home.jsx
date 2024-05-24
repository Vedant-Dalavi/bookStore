import React, { useEffect } from "react";
import { getAllBooks } from "../../services/operations/bookAPI";
import { useDispatch, useSelector } from "react-redux";
import ShowBooks from "./ShowBooks";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <div className="text-white mt-16">
      {token !== null && <ShowBooks />}
      {token === null && (
        <div className="flex items-center justify-between text-3xl mx-auto">
          {" "}
          <div
            className="flex mx-auto mt-36 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login to View the Book
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
