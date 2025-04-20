import React from "react";

function FormField({ placeholder, label, type, name, setName }) {
 
  return (
    <div className=" flex flex-col mt-5 w-full">
      <label className="text-[15px] font-medium text-[#586166]">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className=" bg-white w-[100%] p-2 rounded outline-0 text-sm"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default FormField;
