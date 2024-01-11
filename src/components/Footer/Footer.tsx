import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black px-6 py-12">
      <div className=" max-w-screen-xl mx-auto px-6">
        <div className="flex items-center">
          <div className="flex flex-grow">
            <span className="poppins text-gray-500">
              Developed by 💗 Argy Synanis
            </span>
          </div>
          <div className="flex justify-end items-center space-x-6">
            <Link
              to="https://www.linkedin.com/in/argyrios-synanis/"
              className="poppins text-white cursor-pointer"
              target="_blank"
            >
              Linkedin
            </Link>
            <Link
              to="https://github.com/ArgyriosSynanis"
              className="poppins text-white cursor-pointer"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
