import book from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="mt-10 flex flex-col-reverse items-center justify-center gap-8 px-5 md:flex-row md:gap-16 lg:gap-28">
      <div className="text-center md:text-left">
        <h1 className="mb-5 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          Books to freshen up <br className="hidden sm:block" />
          your bookshelf
        </h1>

        <button className="btn bg-[#23BE0A] text-white">
          View The List
        </button>
      </div>

      <div>
        <img
          src={book}
          alt=""
          className="w-56 sm:w-64 md:w-72 lg:w-80"
        />
      </div>
    </div>
  );
};

export default Banner;