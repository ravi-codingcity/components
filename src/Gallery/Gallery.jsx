import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Gallery_1 from "./Gallery_1";
import Gallery_code_1 from "./Gallery_code_1";
import Gallery_2 from "./Gallery_2";
import Gallery_code_2 from "./Gallery_code_2";
import Header from "../Components/Header";

function Gallery() {
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
                Gallery (Tailwind CSS + React Js)
              </h1>
              <p>
                The Gallery component is an ideal way to showcase images,
                artworks, products, or any visual content in an organized and
                interactive format. It allows users to explore images in a grid
                layout, enhancing the visual appeal and user experience of your
                website.
              </p>
              <br />
              <p>
                This Gallery component allows you to display images in a
                visually appealing, interactive way, providing a great
                experience for visitors.
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

            {/** Gallery 1 **/}

            {isCodeview_1 ? <Gallery_1 /> : <Gallery_code_1 />}

            {/** Gallery 2 **/}

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

            {/** Gallery 2 **/}

            {isCodeview_2 ? <Gallery_2 /> : <Gallery_code_2 />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
