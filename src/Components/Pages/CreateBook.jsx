import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createNewBook } from "../../services/operations/bookAPI";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    title: "",
    auther: "",
    genre: "",
    yearPublished: "",
  });

  const { title, auther, genre, yearPublished } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    createNewBook(token, formData);
  };

  return (
    <div className="w-11/12 flex mx-auto items-center justify-center">
      <form
        onSubmit={handleOnSubmit}
        className="lg:mt-36 mt-20 flex flex-col gap-y-4"
      >
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Title <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="title"
            value={title}
            onChange={handleOnChange}
            placeholder="Enter Book Title"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Auther <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="auther"
            value={auther}
            onChange={handleOnChange}
            placeholder="Enter Auther Name"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
          />
        </label>

        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Genre <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="genre"
            value={genre}
            onChange={handleOnChange}
            placeholder="Enter Book Genre"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>

        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Published Date <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="date"
            name="yearPublished"
            value={yearPublished}
            onChange={handleOnChange}
            placeholder="Enter Published Date"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>

        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Create Book
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
