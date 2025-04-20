import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router";
function Navbar() {
  return (
    <div className="mb-24">
      <div className="flex justify-between pt-4 px-4 md:px-16 items-center font-medium">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={66} />
        </Link>

        {/* <nav className="md:flex space-x-16 hidden">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
        </nav> */}

        <div className="flex gap-5">
          <Link
            to={"/register"}
            className=" bg-[#843E71] text-white px-4 py-1.5 rounded"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
