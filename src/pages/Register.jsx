import React, { useState } from "react";
import FormField from "../components/FormField";
import { useDispatch } from "react-redux";
import { update } from "../store/userSlice";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Register() {
  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleImageUpload = (e) => {
    const img = e.target.files[0];

    if (img) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(img);
    }
  };

  const dispatch = useDispatch();
  console.log(name);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !username || !phone || !email) {
      return toast.error("All field is required");
    }

    const user = { firstName, lastName, username, email, phone };
    dispatch(update(user));
    toast.success("registration successful", {
      position: "top-center",
    });
    navigate("/success");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-3 ">
        <h1 className="text-4xl font-bold text-[#843E71]">Register Now!</h1>
        <p className="text-sm ">to be a part of the event.</p>
        <h3 className="text-[#586166]">Fill the information carefully</h3>
      </div>
      <div className="sm:w-1/2 mx-auto px-10 my-10">
        <form action="" onSubmit={handleSubmit}>
          <div className="mt-5 flex flex-col ">
            <p className="text-[#843E71] text-xl font-medium">
              Personal Information
            </p>

            <FormField
              label="First name"
              placeholder="Enter your first name"
              type="text"
              name={firstName}
              setName={setFirstName}
            />
            <FormField
              label="Last name"
              placeholder="Enter your last name"
              type="text"
              name={lastName}
              setName={setLastName}
            />
            <FormField
              label="Username"
              placeholder="Enter Username"
              name={username}
              setName={setUsername}
            />
            <FormField
              label="Email Address"
              placeholder="Enter email"
              type="text"
              name={email}
              setName={setEmail}
            />
            <FormField
              label="Mobile Number"
              placeholder="Enter mobile number"
              type="text"
              name={phone}
              setName={setPhone}
            />
            <div className="flex items-center ">
              {image && (
                <img
                  src={image}
                  alt="image"
                  className="h-10 w-10 object-cover rounded-full mt-4"
                />
              )}

              {/* <input
                type="file"
               
                onChange={handleImageUpload}
                className="bg-white mt-5 p-2 rounded"
              /> */}
            </div>
          </div>
          <div className="items-center flex justify-center my-10">
            <button className="bg-[#843E71] px-3 py-2 text-white rounded ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
