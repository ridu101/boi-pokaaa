// import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../components/About/About";
import BookDetails from "../components/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";
import PagesToRead from "../pages/PagesToRead/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookDetails/:id",
        loader: async ({ params }) => {
          const response = await fetch("/booksData.json");
          const books = await response.json();

          return books.find((book) => book.bookId === parseInt(params.id));
        },
        Component: BookDetails,
      },
      {
        path: "readList",
        loader: () => fetch("booksData.json"),
        Component: ReadList,
      },
      {
        path: "/pagesToRead",
        loader: () => fetch("/booksData.json"),
        Component: PagesToRead
      },
    ],
  },
]);
