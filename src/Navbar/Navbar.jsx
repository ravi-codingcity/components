import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar_1 from "./Navbar_1";
import Navbar_code_1 from "./Navbar_code_1";
import Navbar_2 from "./Navbar_2";
import Navbar_code_2 from "./Navbar_code_2";
import Header from "../Components/Header";

function Navbar() {
  const [isCodeview_1, setCodeview_1] = useState(true);
  const [isCodeview_2, setCodeview_2] = useState(true);

  return (
    <>
      <div className="font-poppins">
        <Header />
        <div className="flex items-start align-top justify-start bg-white dark:bg-black dark:text-white">
          <div>
            <Sidebar />
          </div>
          <div className=" mx-4 p-7 max-w-screen-lg ">
            <div className="">
              <h1 className="text-2xl font-bold py-2">
                Navbar (Tailwind CSS + React Js)
              </h1>
              <p>
                The Navbar component is a crucial element for any website,
                providing users with easy navigation to different sections or
                pages. A well-designed Navbar enhances user experience by
                offering intuitive access to essential links and features.
              </p>
              <br />
              <p>
                Whether it's a simple menu or a more complex navigation system
                with dropdowns and icons, this component is highly customizable
                with Tailwind CSS, allowing you to tailor it to fit your
                website's unique design and functionality.
              </p>
              <br />
              <p>
                The Navbar component is your go-to solution for creating a
                structured, user-friendly navigation system that helps visitors
                move effortlessly through your website.
              </p>
            </div>

            <div className="py-3">
              <span className="flex items-center py-5">
                <span className="h-px flex-1 bg-black dark:bg-white"></span>
                <span className="shrink-0 px-6 font-bold text-2xl dark:text-white">
                  Sample 1
                </span>
                <span className="h-px flex-1 bg-black  dark:bg-white"></span>
              </span>
              <a
                className="cursor-pointer group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 mx-2"
                onClick={() => setCodeview_1(true)}
              >
                <span className="block rounded-sm bg-white dark:bg-slate-600 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  Preview
                </span>
              </a>
              <a
                className="cursor-pointer group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 mx-2"
                onClick={() => setCodeview_1(false)}
              >
                <span className="block rounded-sm bg-white dark:bg-slate-600 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  View Code
                </span>
              </a>
            </div>

            {/** Navbar 1 **/}

            {isCodeview_1 ? <Navbar_1 /> : <Navbar_code_1 />}

            {/** Navbar 2 **/}

            <div className="py-3">
              <span className="flex items-center py-5">
                <span className="h-px flex-1 bg-black dark:bg-white"></span>
                <span className="shrink-0 px-6 font-bold text-2xl dark:text-white">
                  Sample 2
                </span>
                <span className="h-px flex-1 bg-black  dark:bg-white"></span>
              </span>
              <a
                className=" cursor-pointer group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 mx-2"
                onClick={() => setCodeview_2(true)}
              >
                <span className="block rounded-sm bg-white dark:bg-slate-600 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  Preview
                </span>
              </a>
              <a
                className="cursor-pointer group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 mx-2"
                onClick={() => setCodeview_2(false)}
              >
                <span className="block rounded-sm bg-white dark:bg-slate-600 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  View Code
                </span>
              </a>
            </div>

            {/** Navbar 2 **/}

            {isCodeview_2 ? <Navbar_2 /> : <Navbar_code_2 />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
