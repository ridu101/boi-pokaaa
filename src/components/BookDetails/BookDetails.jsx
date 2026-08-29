import { useLoaderData } from "react-router";
import { addToStoreDB,addToWishList } from "../../assets/util/addToDb";
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
    <div className="mt-10">
      <div className="flex justify-center gap-10">
        <div>
          <img
            className="h-141 w-120.25 rounded-2xl bg-gray-200 p-10 object-contain"
            src={image}
            alt=""
          />
        </div>

        <div className="flex h-141 w-1/2 flex-col">
          <h1 className="mb-2 text-3xl font-bold">{bookName}</h1>

          <p className="mb-2">{author}</p>

          <div className="mb-2 border-b"></div>

          <p>{category}</p>

          <div className="mt-2 border-b"></div>

          <p className="mt-2 h-40 overflow-y-auto pr-2">
            <span className="font-bold">Review: </span>
            {review}
          </p>

          <div className="mt-4 flex items-center gap-4">
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
            <div className="mt-2 grid grid-cols-[160px_1fr] items-center">
              <p className="text-gray-600">Number of Pages:</p>
              <p className="font-bold">{totalPages}</p>
            </div>

            <div className="mt-3 grid grid-cols-[160px_1fr] items-center">
              <p className="text-gray-600">Publisher:</p>
              <p className="font-bold">{publisher}</p>
            </div>

            <div className="mt-3 grid grid-cols-[160px_1fr] items-center">
              <p className="text-gray-600">Year of Publishing:</p>
              <p className="font-bold">{yearOfPublishing}</p>
            </div>

            <div className="mt-3 grid grid-cols-[160px_1fr] items-center">
              <p className="text-gray-600">Rating:</p>
              <p className="font-bold">{rating}</p>
            </div>
          </div>

          <div className="mt-auto flex gap-3">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn font-semibold"
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
