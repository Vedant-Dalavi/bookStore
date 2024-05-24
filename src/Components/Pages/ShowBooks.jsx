import React, { useEffect, useState } from "react";
import { getAllBooks } from "../../services/operations/bookAPI";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import { useNavigate } from "react-router-dom";

const ShowBooks = () => {
  const { token } = useSelector((state) => state.auth);

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const getBooks = async () => {
    try {
      const response = await getAllBooks(token);
      setBooks(response);
    } catch (error) {
      console.log("Unable to Fetch Enrolled Courses");
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  console.log("books data :: ", books);

  return (
    <div className="text-white">
      {books.length > 0 ? (
        <div className="text-white flex flex-col items-center justify-between">
          <p className="text-[12px] text-richblack-300">
            Click On Title To Edit The Book Details
          </p>
          <div className="">
            <p className="text-white my-10 font-bold text-4xl">Your Books</p>
          </div>
          <div
            className="bg-richblack-500 w-max p-5 rounded-md mb-3   hover::bg-richblack-700 transition-all duration-300 hover:scale-95 cursor-pointer"
            onClick={() => navigate("/create-book")}
          >
            <p>Create New Book</p>
          </div>
          <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1  xl:grid-cols-4 mb-12">
            {books.map((book, index) => (
              <div key={index} className="min-w-[250px]">
                <BookCard
                  title={book.title}
                  auther={book.auther}
                  genre={book.genre}
                  yearPublished={book.yearPublished}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between gap-y-10 mx-auto mt-36">
          <p className="font-semibold text-xl">
            There are No Books in your account
          </p>

          <div
            className="bg-richblack-500 w-max p-5 rounded-md mb-3   hover::bg-richblack-700 transition-all duration-300 hover:scale-95 cursor-pointer"
            onClick={() => navigate("/create-book")}
          >
            {" "}
            <p>Create A Book</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBooks;
