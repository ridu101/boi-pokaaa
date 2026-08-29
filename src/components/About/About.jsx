const About = () => {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-gradient-to-br from-[#23BE0A] to-[#59C6D2] p-8 text-white md:p-12">
            <span className="mb-4 w-fit rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              About Book Vibe
            </span>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Discover Your Next Great Read
            </h1>

            <p className="mt-5 leading-7 text-white/90">
              Book Vibe is a simple and engaging platform where readers can
              explore books, view detailed information, and organize their
              reading journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 font-semibold text-[#23BE0A]">
                Explore Books
              </span>

              <span className="rounded-full border border-white/50 px-4 py-2 font-semibold">
                Track Reading
              </span>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Book Vibe?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We help readers keep their favorite books organized while making
              the reading experience easier, cleaner, and more enjoyable.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl bg-green-50 p-5">
                <h3 className="text-lg font-bold text-[#23BE0A]">
                  📚 Explore Books
                </h3>

                <p className="mt-2 text-gray-600">
                  Browse books and view information about authors, ratings,
                  publishers, categories, and reviews.
                </p>
              </div>

              <div className="rounded-2xl bg-cyan-50 p-5">
                <h3 className="text-lg font-bold text-[#50B1C9]">
                  ✅ Build Your Read List
                </h3>

                <p className="mt-2 text-gray-600">
                  Save completed books and keep your reading history organized
                  in one convenient place.
                </p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5">
                <h3 className="text-lg font-bold text-orange-500">
                  ⭐ Create a Wishlist
                </h3>

                <p className="mt-2 text-gray-600">
                  Save the books you want to read next and access them whenever
                  you need inspiration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 border-t border-gray-200 bg-gray-50 sm:grid-cols-3">
          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold text-[#23BE0A]">10+</h3>
            <p className="mt-1 text-gray-600">Featured Books</p>
          </div>

          <div className="border-y border-gray-200 p-6 text-center sm:border-x sm:border-y-0">
            <h3 className="text-3xl font-bold text-[#50B1C9]">2</h3>
            <p className="mt-1 text-gray-600">Personal Lists</p>
          </div>

          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold text-orange-500">100%</h3>
            <p className="mt-1 text-gray-600">Reader Focused</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;