import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { tags,bookId } = singleBook;
  return (
   <Link to={`/bookDetails/${bookId}`}>
    <div>
      <div className="h-125.5 w-full rounded-2xl border-2 border-gray-200 p-5">
        <div className="flex h-72 items-center justify-center rounded-xl bg-gray-200">
          <img className="h-41.5 w-33.5" src={singleBook.image} alt="" />
        </div>

        <div className="mt-4">
          <div className="mb-3 flex gap-5 font-semibold text-[#23BE0A]">
            {tags.map((tag, index) => (
              <p key={index} className="rounded-2xl bg-green-50 px-3 py-1">
                {tag}
              </p>
            ))}
          </div>

          <h1 className="mt-2 text-xl font-bold">{singleBook.bookName}</h1>

          <p className="mt-2">By: {singleBook.author}</p>
            <div className=" border-t border-dashed mt-3"></div>
          <div className="mt-3 flex justify-between">
            <p className="font-bold text-[#59C6D2]">{singleBook.category}</p>

            <div className="flex items-center gap-1">
              <p>{singleBook.rating}</p>
              <FaStarHalfAlt className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
   </Link>
  );
};

export default Book;
