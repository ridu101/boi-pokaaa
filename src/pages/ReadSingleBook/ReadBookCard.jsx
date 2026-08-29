import {
  FaRegCalendarAlt,
  FaRegFileAlt,
  FaRegUser,
} from "react-icons/fa";
import { Link } from "react-router";

const ReadBook = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    tags,
    category,
    rating,
    publisher,
    yearOfPublishing,
    totalPages,
  } = book;

  return (
    <div className="rounded-xl border border-gray-200 p-4 mb-5 mt-5">
      <div className="flex flex-col gap-5 sm:flex-row  ">
        <div className="flex h-48 w-full shrink-0 items-center justify-center rounded-xl bg-gray-100 sm:h-40 sm:w-40">
          <img
            className="h-32 w-24 object-contain sm:h-28 sm:w-20"
            src={image}
            alt={bookName}
          />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold">{bookName}</h2>

          <p className="mt-2 text-gray-700">
            By: <span className="font-medium">{author}</span>
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <p className="font-bold">Tag</p>

            {tags.map((tag, index) => (
              <p
                key={index}
                className="rounded-full bg-green-50 px-4 py-2 font-semibold text-[#23BE0A]"
              >
                #{tag}
              </p>
            ))}

            <div className="flex items-center gap-2 text-gray-600">
              <FaRegCalendarAlt />
              <p>Year of Publishing: {yearOfPublishing}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <FaRegUser />
              <p>Publisher: {publisher}</p>
            </div>

            <div className="flex items-center gap-2">
              <FaRegFileAlt />
              <p>Page {totalPages}</p>
            </div>
          </div>

          <div className="my-4 border-t border-gray-200"></div>

          <div className="flex flex-wrap items-center gap-3">
            <p className="rounded-full bg-blue-50 px-4 py-2 text-blue-500">
              Category: {category}
            </p>

            <p className="rounded-full bg-orange-50 px-4 py-2 text-orange-400">
              Rating: {rating}
            </p>

            <Link
              to={`/bookDetails/${bookId}`}
              className="rounded-full bg-[#23BE0A] px-5 py-2 font-semibold text-white"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;