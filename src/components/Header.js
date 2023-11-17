import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a className="flex" href="/">
            <img src={Logo} className="h-40" alt="My logo" />
            <div className="hidden lg:flex flex-col my-auto text-5xl">
              <div className="text-gradient">SAMARTH</div>
              <div className="font-semibold">SARKAR</div>
            </div>
          </a>
          {/* Button */}
          <button className="btn btn-sm">
            <a
              href="mailto:samarthsarkar1230@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Work with me
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
