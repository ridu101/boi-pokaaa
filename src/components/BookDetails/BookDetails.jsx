import { useLoaderData } from "react-router";
import {
  addToStoreDB,
  addToWishList,
} from "../../assets/util/addToDb";
import Swal from "sweetalert2";

const BookDetails = () => {
  const book = useLoaderData();

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (id) => {
    const isAdded = addToStoreDB(id);

    if (isAdded) {
      Swal.fire({
        title: "Success!",
        text: "Book added to the Read List",
        icon: "success",
        confirmButtonColor: "#23BE0A",
      });
    } else {
      Swal.fire({
        title: "Already Added!",
        text: "This book is already in your Read List",
        icon: "warning",
        confirmButtonColor: "#F59E0B",
      });
    }
  };

  const handleAddToWishList = (id) => {
    const isAdded = addToWishList(id);

    if (isAdded) {
      Swal.fire({
        title: "Success!",
        text: "Book added to the Wish List",
        icon: "success",
        confirmButtonColor: "#50B1C9",
      });
    } else {
      Swal.fire({
        title: "Already Added!",
        text: "This book is already in your Wish List",
        icon: "warning",
        confirmButtonColor: "#F59E0B",
      });
    }
  };

  return (
    <div className="mt-10 px-4">
      <div className="flex flex-col justify-center gap-8 lg:flex-row lg:gap-10">
        <div className="w-full lg:w-auto">
          <img
            className="h-96 w-full rounded-2xl bg-gray-200 p-6 object-contain sm:h-120 sm:p-10 lg:h-141 lg:w-120.25"
            src={image}
            alt=""
          />
        </div>

        <div className="flex h-auto w-full flex-col lg:h-141 lg:w-1/2">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            {bookName}
          </h1>

          <p className="mb-2">{author}</p>

          <div className="mb-2 border-b"></div>

          <p>{category}</p>

          <div className="mt-2 border-b"></div>

          <p className="mt-2 h-40 overflow-y-auto pr-2">
            <span className="font-bold">Review: </span>
            {review}
          </p>

          <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <p className="font-semibold">Tags</p>

            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <p
                  key={index}
                  className="rounded-full bg-green-50 px-4 py-2 font-semibold text-[#23BE0A]"
                >
                  #{tag}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <div className="mt-2 grid grid-cols-[140px_1fr] items-center sm:grid-cols-[160px_1fr]">
              <p className="text-gray-600">Number of Pages:</p>
              <p className="font-bold">{totalPages}</p>
            </div>

            <div className="mt-3 grid grid-cols-[140px_1fr] items-center sm:grid-cols-[160px_1fr]">
              <p className="text-gray-600">Publisher:</p>
              <p className="font-bold">{publisher}</p>
            </div>

            <div className="mt-3 grid grid-cols-[140px_1fr] items-center sm:grid-cols-[160px_1fr]">
              <p className="text-gray-600">
                Year of Publishing:
              </p>
              <p className="font-bold">{yearOfPublishing}</p>
            </div>

            <div className="mt-3 grid grid-cols-[140px_1fr] items-center sm:grid-cols-[160px_1fr]">
              <p className="text-gray-600">Rating:</p>
              <p className="font-bold">{rating}</p>
            </div>
          </div>

          <div className="mt-6 flex gap-3 lg:mt-auto">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn font-semibold bg-[#23BE0A] text-white"
            >
              Read{" "}
            </button>

            <button
              onClick={() => handleAddToWishList(bookId)}
              className="btn bg-[#50B1C9] font-semibold text-white"
            >
              WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;