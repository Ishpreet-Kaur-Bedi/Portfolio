import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};
export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, This is Ishpreet Kaur",
      "Experienced {Content Writer}",
      "Girl-who-loves-coffee.jsx",
      "<But loves to code more/>",
      "[...A Passionate Poet]",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className=" flex h-screen flex-col space-y-8 items-center justify-center text-center overflow-hidden py-5 mt-50">
      <BackgroundCircles />

      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/Images/IshpreetProfileImage.jpeg"
        alt=""
        width={150}
        height={150}
      />

      <div className="z-20">
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
         
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7AB0A" />{" "}
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="herobutton ">
              About
            </button>
          </Link>
          <Link href="#experience">
            {" "}
            <button className="herobutton">
              Experience
            </button>
          </Link>

          <Link href="#skills">
            <button className="herobutton ">
              Skills
            </button>
          </Link>

          <Link href="#project">
            <button className="herobutton ">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
