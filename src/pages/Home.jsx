import React from "react";
import dentist from "../assets/Group 5.png";
import vector from "../assets/Vector(3).png";
import logos from "../assets/Logos.png";
import { Link } from "react-router";
function Home() {
  return (
    <div className=" px-4 sm:px-16 mt-32">
      <div className=" sm:flex items-center justify-between relative">
        <div className="relative flex-col space-y-3">
          <img
            src={vector}
            alt="vector"
            width={50}
            className="absolute sm:-top-32 -top-12 left-20 sm:left-40 float-img "
          />
          <h1 className=" text-3xl sm:text-5xl font-bold text-[#586166]">
            <span className="text-[#843E71]">Tooth Talk:</span>
            <br /> A Casual Meetup for <br />
            Dental Professionals
          </h1>
          <p>Please register to be a part of the event.</p>

          <Link to="/register" className=" ">
            <button className="bg-[#843E71] px-4 py-2 mt-3 text-white rounded cursor-pointer">
              Register Now
            </button>
          </Link>
        </div>
        <div>
          <img src={dentist} alt="dentist" className="w-[540px]" />
        </div>
      </div>
      <div className="text-center items-center flex flex-col gap-5 sm:mt-20">
        <h1 className="text-[#586166] text-2xl sm:text-[45px] text-center font-bold sm:leading-12">
          Our Partner in <br />
          Promoting Oral Health
        </h1>
        <img src={logos} alt="Partners" />
      </div>
    </div>
  );
}

export default Home;
