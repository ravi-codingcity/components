import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Blog_card_1 from "./Blog_card_1";
import Blog_card_code_1 from "./Blog_card_code_1";
import Blog_card_2 from "./Blog_card_2";
import Blog_card_code_2 from "./Blog_card_code_2";
import Header from "../Components/Header";


function Blog_card() {
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
                Blog Card (Tailwind CSS + React Js)
              </h1>
              <p>
                The Blog Card component is designed to showcase blog posts or
                articles in a clean and visually appealing manner. Each card
                highlights essential information like the title, image, summary,
                and a link to the full post, providing an intuitive and engaging
                way for users to explore your content.
              </p>
              <br />
              <p>
                Whether you're building a blog, news site, or any content-driven
                platform, the Blog Card component helps organize articles in a
                grid layout, ensuring a great user experience. It can be easily
                customized using Tailwind CSS to fit any design style.
              </p>
              <br />
              <p>
                Use the Blog Card component to organize your content, create
                eye-catching previews, and improve navigation through your blog
                posts.
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

            {/** Blog_card 1 **/}

            {isCodeview_1 ? <Blog_card_1 /> : <Blog_card_code_1 />}

            {/** Blog_card 2 **/}

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

            {/** Blog_card 1 **/}

            {isCodeview_2 ? <Blog_card_2 /> : <Blog_card_code_2 />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog_card;
