import { useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import {
  getStoreBook,
  getStoredWishList,
} from "../../assets/util/addToDb";

import ReadBook from "../ReadSingleBook/ReadBookCard";

const ReadList = () => {
  const data = useLoaderData();

  const [sort, setSort] = useState("");

  const [readList, setReadList] = useState(() => {
    const storedReadList = getStoreBook();

    return data.filter((book) =>
      storedReadList
        .map(Number)
        .includes(Number(book.bookId))
    );
  });

  const [wishList, setWishList] = useState(() => {
    const storedWishList = getStoredWishList();

    return data.filter((book) =>
      storedWishList
        .map(Number)
        .includes(Number(book.bookId))
    );
  });

  const handleSort = (type) => {
    setSort(type);

    if (type === "Pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => b.totalPages - a.totalPages
      );

      const sortedWishList = [...wishList].sort(
        (a, b) => b.totalPages - a.totalPages
      );

      setReadList(sortedReadList);
      setWishList(sortedWishList);
    }

    if (type === "Ratings") {
      const sortedReadList = [...readList].sort(
        (a, b) => b.rating - a.rating
      );

      const sortedWishList = [...wishList].sort(
        (a, b) => b.rating - a.rating
      );

      setReadList(sortedReadList);
      setWishList(sortedWishList);
    }
  };

  return (
    <div className="mt-10">
      <div className="mb-10 flex justify-center">
        <details className="dropdown">
          <summary className="btn m-1 bg-[#23BE0A] text-white">
            Sort By: {sort || "Select"}
          </summary>

          <ul className="menu dropdown-content z-10 w-52 rounded-box bg-base-100 p-2 shadow-sm">
            <li>
              <button onClick={() => handleSort("Pages")}>
                Pages
              </button>
            </li>

            <li>
              <button onClick={() => handleSort("Ratings")}>
                Ratings
              </button>
            </li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List ({readList.length})</Tab>
          <Tab>Wish List ({wishList.length})</Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-5">
            {readList.length > 0 ? (
              readList.map((book) => (
                <ReadBook
                  key={book.bookId}
                  book={book}
                />
              ))
            ) : (
              <p className="py-10 text-center text-gray-500">
                No books in the Read List
              </p>
            )}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="space-y-5">
            {wishList.length > 0 ? (
              wishList.map((book) => (
                <ReadBook
                  key={book.bookId}
                  book={book}
                />
              ))
            ) : (
              <p className="py-10 text-center text-gray-500">
                No books in the Wish List
              </p>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;