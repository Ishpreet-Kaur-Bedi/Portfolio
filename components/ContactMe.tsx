import React from "react";
import { BsFillTelephoneFill,BsFillEnvelopeFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

const ContactMe = () => {
  return (
    <div className="h-screen flex relative flex-col  text-center md:flex-roq max-w-7xl px-10 justify-evenly mx-auto items-center  ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        contact
      </h3>
      <div className="flex flex-col  space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need
          <span className="decoration-[#F7AB0A]/50 underline">lets talk</span>
        </h4>
<div className="space-y-10">

<div className="flex items-center space-x-5 justify-center">
          <BsFillTelephoneFill className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">123456</p>
        </div>

        <div className="flex items-center space-x-5 justify-center">
          <BsFillEnvelopeFill className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">kaur.ishpreet.bedi@gmail.com</p>
        </div>

        <div className="flex items-center space-x-5 justify-center">
          <BiCurrentLocation className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">123456</p>
        </div>
</div>


<form action="">

<div>
    <input type="text" />
</div>
<input type="text" />
<textarea />
<button>Submit</button>
</form>
      </div>
    </div>
  );
};

export default ContactMe;
