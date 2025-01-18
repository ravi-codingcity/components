import React, { useRef } from "react";

function Accordion_code_1() {
  const codeRef = useRef();

  // Function to handle the copy button click
  const handleCopy = () => {
    navigator.clipboard.writeText(codeRef.current.textContent).then(() => {
      alert("Code copied to clipboard!");
    });
  };
  return (
    <div>
      <div className=" bg-gray-900 text-gray-200 font-mono flex items-center justify-center p-3">
        <div className="w-full max-w-5xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-between bg-gray-700 p-3">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="text-sm text-gray-400">index.js</div>
            <button
              onClick={handleCopy}
              className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
            >
              Copy
            </button>
          </div>

          {/* Code Block */}
          <div className="p-4 overflow-auto bg-gray-900">
            <pre
              ref={codeRef}
              className="text-sm text-gray-200 whitespace-pre-wrap"
            >
              <code className="block">
                {`
                  <div className="space-y-4">
                    <details
                      className="group [&_summary::-webkit-details-marker]:hidden"
                      open
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white">
                        <h2 className="font-medium">
                          Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h2>

                        <svg
                          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>

                      <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ab hic veritatis molestias culpa in, recusandae
                        laboriosam neque aliquid libero nesciunt voluptate dicta
                        quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                      </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white">
                        <h2 className="font-medium">
                          Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h2>

                        <svg
                          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>

                      <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ab hic veritatis molestias culpa in, recusandae
                        laboriosam neque aliquid libero nesciunt voluptate dicta
                        quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                      </p>
                    </details>
                  </div>`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion_code_1;
