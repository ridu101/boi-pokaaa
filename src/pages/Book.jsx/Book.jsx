// import React from 'react';


const Book = ({singleBook}) => {
    console.log(singleBook)
    
    return (
        <div>
            <div className='w-full h-125.5 border-2 p-5 border-gray-200 rounded-2xl'>
               <div className="flex h-72 items-center justify-center rounded-xl bg-gray-100">
                 <img className='w-33.5 h-41.5   ' src={singleBook.image} alt="" />
               </div>
                <div className='mt-4'>
                    <div className='flex text-[#23BE0A] font-semibold gap-5 mb-3'>
                        <p className=''>{singleBook.yearOfPublishing}</p>
                        <p className=''>{singleBook.publisher}</p>
                    </div>
                    <h1 className='font-bold text-xl mt-2'>{singleBook.bookName}</h1>
                    <p className='mt-2'>By: {singleBook.author} </p>
                    <div className='flex justify-between mt-5'>
                        <p className="font-bold text-[#59C6D2]">{singleBook.category}</p>
                        <div className='flex gap-1'>
                            <p>{singleBook.rating}</p>
                            <p>⭐</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;