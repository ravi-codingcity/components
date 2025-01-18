import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Forms_1 from "./Forms_1";
import Forms_code_1 from "./Forms_code_1";
import Forms_2 from "./Forms_2";
import Forms_code_2 from "./Forms_code_2";
import Header from "../Components/Header";

function Forms() {
  const [isCodeview_1, setCodeview_1] = useState(true);

  const [isCodeview_2, setCodeview_2] = useState(true);

  return (
    <>
      <div className="font-poppins">
        <Header/>
        <div className="flex items-start align-top justify-start bg-white dark:bg-black dark:text-white">
          <div>
            <Sidebar />
          </div>
          <div className=" mx-4 p-7 max-w-screen-lg ">
            <div className="">
              <h1 className="text-2xl font-bold py-2">
                Forms (Tailwind CSS + React Js)
              </h1>
              <p>
                Forms are essential for capturing user input on your website,
                whether it's for a contact page, sign-up sheet, or feedback
                form. With our Tailwind CSS + React.js Form components, you can
                create visually appealing, functional forms effortlessly.
              </p>
              <br />
              <p>
                Whether you're building a simple contact form or a multi-step
                form, these components provide a solid foundation for your user
                input needs. Use them to gather information efficiently while
                ensuring a seamless user experience.
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
                className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 mx-2 cursor-pointer"
                onClick={() => setCodeview_1(true)}
              >
                <span className="block rounded-sm bg-white dark:bg-slate-600 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  Preview
                </span>
              </a>
              <a
                className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 mx-2 cursor-pointer"
                onClick={() => setCodeview_1(false)}
              >
                <span className="block rounded-sm bg-white dark:bg-slate-600 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  View Code
                </span>
              </a>
            </div>

            {/** Forms 1 **/}

            {isCodeview_1 ? <Forms_1 /> : <Forms_code_1 />}

            <div className="py-3">
              <span className="flex items-center py-5">
                <span className="h-px flex-1 bg-black dark:bg-white"></span>
                <span className="shrink-0 px-6 font-bold text-2xl dark:text-white">
                  Sample 2
                </span>
                <span className="h-px flex-1 bg-black  dark:bg-white"></span>
              </span>
              <a
                className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 mx-2 cursor-pointer"
                onClick={() => setCodeview_2(true)}
              >
                <span className="block rounded-sm bg-white dark:bg-slate-600 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  Preview
                </span>
              </a>
              <a
                className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 mx-2 cursor-pointer"
                onClick={() => setCodeview_2(false)}
              >
                <span className="block rounded-sm bg-white dark:bg-slate-600 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  View Code
                </span>
              </a>
            </div>

            {/** Forms 2 **/}

            {isCodeview_2 ? <Forms_2 /> : <Forms_code_2 />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Forms;
