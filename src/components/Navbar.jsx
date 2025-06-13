import React from "react";
import { Link } from "react-router-dom";
import { links } from "../utils/Data";
import Wrapper from "./Wrapper";

const Navbar = () => {
  return (
    <nav className="mx-auto max-w-5xl p-5 md:rounded-3xl bg-[var(--primary-color)]/70 backdrop-blur-xs  text-[var(--secondary-color)] fixed md:top-5 top-0 left-0 right-0 z-50">
        <div className="w-full flex items-center justify-between">  
          <div className="text-lg font-semibold">
            <Link to="/">AceTutor</Link>
          </div>
          <div className="flex items-center text-lg gap-x-8">
            {links.map((link, idx) => {
              return (
                <Link to={link.path} key={idx}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
