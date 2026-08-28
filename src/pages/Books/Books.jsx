// import React from 'react';

import { Suspense } from "react";
import Book from "../Book.jsx/Book";


const Books = ({data}) => {


    return (
        <div>
            <h1 className="text-center text-4xl p-2 font-bold mt-20">Books</h1>
            <Suspense fallback='Data Loading.......'>
               <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 mt-15">
                {
                data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
               }
               </div>

            </Suspense>
            
        </div>
    );
};

export default Books;