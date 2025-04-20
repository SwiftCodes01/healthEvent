import React from "react";
import { useSelector } from "react-redux";
import Confetti from "react-confetti";
function Success() {
  const name = useSelector((state) => state.user.firstName);

  return (
    <div className="h-10/12 max-w-3xl mx-auto px-6 flex flex-col items-center justify-center overflow-x-hidden">
      <Confetti className="" />
      <h1 className=" text-center text-3xl text-[#843E71] font-bold max-w-4xl mx-auto">
        Congratulations! <i>{name} </i>You have successfully Registered
      </h1>
    </div>
  );
}

export default Success;
