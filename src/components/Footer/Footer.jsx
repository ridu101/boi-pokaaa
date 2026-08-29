import { Link } from "react-router";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-10 px-5 py-12 text-center md:grid-cols-3 md:text-left">
        <div>
          <h2 className="text-2xl font-bold">
            Book <span className="text-[#23BE0A]">Vibe</span>
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Discover great books, organize your reading journey,
            and save your favorite books in one place.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>

          <div className="mt-4 flex flex-col gap-3 text-gray-600">
            <Link
              to="/"
              className="transition hover:text-[#23BE0A]"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="transition hover:text-[#23BE0A]"
            >
              About
            </Link>

            <Link
              to="/readList"
              className="transition hover:text-[#23BE0A]"
            >
              Book List
            </Link>

            <Link
              to="/pagesToRead"
              className="transition hover:text-[#23BE0A]"
            >
              Pages to Read
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Connect With Us</h3>

          <p className="mt-4 text-gray-600">
            Follow us and stay connected with the Book Vibe
            community.
          </p>

          <div className="mt-5 flex justify-center gap-3 md:justify-start">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-5 py-5 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Book Vibe. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;