import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { updateBook } from "../../services/operations/bookAPI";

const UpdateBook = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { oldTitle } = location.state;
  const { token } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    oldTitle,
    title: "",
    auther: "",
    genre: "",
  });

  const { title, auther, genre } = formData;

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      oldTitle,
    }));
  }, [oldTitle]);

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    updateBook(token, formData);
    navigate("/");
  };

  return (
    <div className="w-11/12 flex mx-auto items-center justify-center">
      <form
        onSubmit={handleOnSubmit}
        className="lg:mt-36 mt-20 flex flex-col gap-y-4"
      >
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Title:
          </p>
          <input
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
            Auther:
          </p>
          <input
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
            Genre:
          </p>
          <input
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

        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
