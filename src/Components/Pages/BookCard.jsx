import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { deleteBook } from "../../services/operations/bookAPI";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BookCard = ({ title, auther, genre, yearPublished, index }) => {
  const { token } = useSelector((state) => state.auth);

  const deleteRequest = async (title) => {
    await deleteBook(token, title);
    window.location.reload();
  };

  return (
    <div
      className={`xl:w-[90%] flex flex-col items-center gap-3 justify-between p-3 rounded-md my-3
        ${index % 2 === 0 ? "bg-richblack-800" : "bg-richblack-700"}
    `}
    >
      <div
        className="flex w-full flex-col items-center justify-between bg-richblack-500 rounded-md px-5 py-2 cursor-pointer
            hover:bg-richblack-400 transition-all duration-300 hover:scale-95"
      >
        <div className="flex flex-col items-center justify-between mx-auto">
          <p>Title:</p>
          <Link to="/update-book" state={{ oldTitle: `${title}` }}>
            <p>{title}</p>
          </Link>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between bg-richblack-600 rounded-md px-5 py-2">
        <p>Auther:</p>
        <p>{auther}</p>
      </div>
      <div className="flex w-full flex-col items-center justify-between bg-richblack-500 rounded-md px-5 py-2">
        <p>Genre:</p>
        <p>{genre}</p>
      </div>

      <div className="flex w-full flex-col items-center justify-between bg-richblack-600 rounded-md px-5 py-2">
        <p>Published On:</p>
        <p>{yearPublished.slice(0, 10)}</p>
      </div>

      <div
        onClick={() => deleteRequest(title)}
        className="flex w-full flex-col text-[#D70040] hover:text-[#D2042D] hover:text-3xl text-2xl items-center justify-between bg-richblack-200 hover:bg-richblack-300 transition-all duration-200 hover:scale-95 rounded-md px-5 py-2"
      >
        <MdDeleteForever />
      </div>
    </div>
  );
};

export default BookCard;
