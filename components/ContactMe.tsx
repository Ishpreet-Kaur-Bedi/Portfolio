'use client'



import React from "react";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { global } from "styled-jsx/css";
import { useForm , SubmitHandler } from 'react-hook-form';

type Inputs = {
  name:string
  email:string
  subject:string
  message:string

}



type Props = {}


function ContactMe ({}: Props)  {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit :SubmitHandler<Inputs>= formdata =>{
window.location.href =`mailto:ishpreetshriya@gmail?subject={formdata.subject}&body={formdata.message}`
  };



  return (
    <div className="h-screen flex relative flex-col text-center md:flex-roq max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        contact
      </h3>
      <div className="flex flex-col space-y-10">
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

        <form 
         onSubmit={handleSubmit(onSubmit)}
         className="flex  flex-col  space-y-2  w-fit mx-auto" action="">
          <div className="flex space-x-2">
            <input {...register('name')}
              placeholder="Name"
              className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#F7AB0A]/40 focus:border-[#f7AB0A]/40 hover:border-[#f7AB0A]/40"
              type="text"
            />
            <input {...register('email')}
              placeholder="Email"
              className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#F7AB0A]/40 focus:border-[#f7AB0A]/40 hover:border-[#f7AB0A]/40"
              type="email"
            />
          </div>
          <input {...register('subject')}
            placeholder="Subject"
            className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#F7AB0A]/40 focus:border-[#f7AB0A]/40 hover:border-[#f7AB0A]/40 "
            type="text"
          />
          {/* Fix the textarea tag below */}
          <textarea
          {...register('message')}
            placeholder="Message"
            className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#F7AB0A]/40 focus:border-[#f7AB0A]/40 hover:border-[#f7AB0A]/40"
            
          />
          <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
